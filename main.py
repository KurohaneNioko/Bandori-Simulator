import os

os.environ['PYGAME_HIDE_SUPPORT_PROMPT'] = "hide"
import sys
import time
import pygame
import pydub
import pickle
import random
from multiprocessing import Process, Lock, Value, Array
from BandoriApp import Bandori
from Agent import RLAgent
from Judgement import JudgeMent
from Constant import Difficulty
import torch


# def circle_radio_wrap(bangdream, lock, signal): return bangdream.run(bangdream, lock, signal)


def agent_wrap(rl, time, lock, signal): return rl.run(rl, time, lock, signal)


if __name__ == '__main__':
    # os parameters
    if sys.platform.startswith('win'):
        pydub.AudioSegment.ffmpeg = './ffmpeg.exe'
        pydub.AudioSegment.ffprobe = './ffprobe.exe'
    HEADLESS = 0
    if HEADLESS > 0:
        os.environ['SDL_AUDIODRIVER'] = 'dummy'
        # os.environ['SDL_DISKAUDIOFILE'] = '/root/audio' -> for disk driver
        # if server has a GPU, video dummy is ok, the same as my PC.
        os.environ["SDL_VIDEODRIVER"] = "dummy"
    # pygame initialisation
    torch.cuda.empty_cache()
    pygame.mixer.pre_init(frequency=48000)
    pygame.mixer.init()
    pygame.init()
    # fps = pygame.time.Clock()
    # fps.tick(60)
    pygame.display.set_caption('Bandori Simulator')  # title

    # env/agent global parameters
    height = 720  # width must be int!!
    audio_state = True
    interval = 3
    # share
    env_queue = torch.multiprocessing.Queue()
    replay_buffer_lock = Lock()
    judge_signal = Value('i', 0)
    shared_time = Value('d', 0.0)
    no_life_now = Value('i', 0)
    # music pool
    f = open('./metadata/meta.pickle', 'rb')
    song_list, meta = pickle.load(f)
    f.close()
    easiest_size = 4
    selection = meta[-1:-(easiest_size + 1):-1]
    print(selection)
    # build agent here, auto load latest model

    # train main loop starts here
    for i in range(1000):
        t1 = time.time()
        while not env_queue.empty():
            env_queue.get()
        judge_signal.value, shared_time.value, no_life_now.value = 0, 0.0, 0
        songNo, songName, diff_num = random.choice(selection)  # random select
        # get diff
        diff = Difficulty.easy
        e = song_list[songNo][-1]
        if e[0] == diff_num: diff = Difficulty.easy
        elif e[1] == diff_num: diff = Difficulty.normal
        elif e[2] == diff_num: diff = Difficulty.hard
        elif e[3] == diff_num: diff = Difficulty.expert
        print(i+1, '|', songNo + '.' + songName, diff.name + diff_num, time.strftime('%m.%d-%H:%M:%S'), end=' | ', flush=True)
        bangdream = Bandori(
            height=height,
            noteSpeed=9.0,
            songNo=218,
            difficulty=Difficulty.expert,
            interval=interval,
            audio_state=audio_state,
            shared_time=shared_time,
            real_music=True,   # True if test, False if train
            queue=env_queue,
            no_life_now=no_life_now
        )

        agent = RLAgent(queue=env_queue, with_audio=audio_state, interval=interval)

        agent_process = Process(target=agent_wrap, args=(agent, shared_time, replay_buffer_lock, judge_signal))
        agent_process.start()
        time.sleep(0.017)
        bangdream.run(replay_buffer_lock, judge_signal)
        agent_process.join()
        print(' | ' + '{:.2f}'.format(shared_time.value / 1000.) + '/'
            '{:.2f}'.format(bangdream.ng.note_end_time + 2) + '=' + '{:.2f}'.format(
            (shared_time.value / 10. / bangdream.ng.note_end_time + 2)) + '%' +
              ' | queue unused:', env_queue.qsize(), 'time used:', time.time() - t1, flush=True)
        while not env_queue.empty():
            env_queue.get()

        torch.cuda.empty_cache()

    env_queue.close()
    print('All subprocesses done.')
