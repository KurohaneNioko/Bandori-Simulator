import pygame
import pydub
import sys
import os
import numpy as np
import time
from Constant import ConstPara, SongChart, Difficulty
from Background import Background
from Sprite import NoteBarGroup
from Judgement import JudgeMent


class Bandori():

    def __init__(
            self, height=144, noteSpeed=9.0, songNo=73, difficulty=Difficulty.expert,
            interval=3, audio_state=True, shared_time=None, real_music=False, queue=None, no_life_now=None):
        self.const = ConstPara(height=height, noteSpeed=noteSpeed)
        self.screen = pygame.display.set_mode(self.const.size, flags=0, depth=24)  # window size
        self.bg = Background(self.const)
        self.s_c = SongChart(songNo=songNo, difficulty=difficulty)
        self.ng = NoteBarGroup(self.s_c.chartPath, self.const)
        self.in_time_music = real_music  # play music? default is false
        self.playing = True
        # for observer
        self.rec_surface = self.screen.subsurface((0, self.const.height / 2, self.const.width, self.const.height / 2))
        self.playTime = 0.0
        self.shared_time = shared_time
        self.interval = interval
        self.delta_t = 15.5 / 1000.
        self.audio_state = audio_state
        self.judge = JudgeMent(
            self.ng.basic_notes, self.ng.note_bar_note, self.ng.notes_hit, no_life_now=no_life_now)
        # if self.audio_state:
        self.audio_buffer = []
        self.pydub_bgm = pydub.AudioSegment.from_mp3(self.s_c.songPath)
        # for agent
        # self.latest_env = [0 for _ in range(self.interval+(1 if self.audio_state else 0))] # screen*3, audio segment
        # self.latest_env = env
        self.torch_queue = queue
        self.no_life_now = no_life_now

    def start_music(self):
        pygame.mixer.music.load(self.s_c.songPath)
        pygame.mixer.music.play()

    def update(self):
        if "SDL_VIDEODRIVER" not in os.environ or os.environ["SDL_VIDEODRIVER"] != "dummy":
            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_p:
                        if self.playing:
                            self.playing = False
                            pygame.mixer.music.pause()
                        else:
                            self.playing = True
                            pygame.mixer.music.unpause()
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
        if self.in_time_music:
            self.playTime = pygame.mixer.music.get_pos() / 1000.0
        else:
            self.playTime += 0.016  # 60+ frames in 1s
        self.screen.fill((0, 0, 0))
        self.bg.draw_lane(self.screen)
        self.ng.bar_update_draw(
            self.screen,
            self.playTime,
            # self.const.laneHeight,
            # self.const.noteScreenTime,
            # self.const.laneWidth,
            # self.const.width,
            # self.const.height,
            # self.const.lineOffset,
            # self.const.noteWidth
        )
        self.bg.draw_line(self.screen)
        self.ng.note_update_draw(
            self.screen,
            self.playTime,
            # self.const.laneHeight,
            # self.const.noteScreenTime,
            # self.const.laneWidth,
            # self.const.width,
            # self.const.height,
            # self.const.lineOffset,
            # self.const.noteWidth
        )

        # # show playTime
        # textSurface = pygame.font.Font(None, 32)
        # text = textSurface.render(str(round(playTime, 3)), 1, (255,255,255))
        # screen.blit(text, (0,0))
        # pygame.image.save(self.rec_surface, 'record/'+str(round(self.playTime, 9))+'.png')
        pygame.display.update()
        # in windows, music pos = -1 when it ends
        # dummy soundcard accounts for linux bad result?

    # @staticmethod
    def run(self, lock, act_signal):
        # playing = True
        # print(hex(id(self.rec_surface)))
        # clip_len = np.array([])
        # print('bdr start')
        # save2disk = not True
        interval_flag = 0
        if self.in_time_music:
            self.start_music()
        if self.in_time_music:
            old_clock = time.time()
        else:
            old_clock = self.playTime
        # last_play_time = pygame.mixer.music.get_pos()
        while self.playTime < self.ng.note_end_time+2 and \
                ((not self.in_time_music) or (self.in_time_music and pygame.mixer.music.get_pos()>=0)):
            if self.no_life_now.value == 1:
                break
            self.update()
            # snapshot
            if self.in_time_music:
                new_clock = time.time()
            else:
                new_clock = self.playTime
            if new_clock - old_clock >= self.delta_t:
                old_clock = new_clock
                # if save2disk:
                #     pygame.image.save(self.rec_surface, 'record/'+str(round(self.playTime, 9))+'.png')
                # pixels3d -> no copy, fast, but lock as long as it can
                # self.replay_buffer.append(pygame.surfarray.array3d(self.rec_surface))
                e = pygame.surfarray.array3d(self.rec_surface)
                # print(e.shape)
                if interval_flag == -1:     # put next state
                    self.torch_queue.put(e)
                    if self.audio_state:
                        self.torch_queue.put(self.pydub_bgm[
                                             int(this_play_time) - 16:int(this_play_time)
                                             ].get_array_of_samples()
                        )
                    interval_flag = 0
                else:
                    self.torch_queue.put(e)
                interval_flag += 1
            if interval_flag == self.interval:
                interval_flag = -1
                if not self.in_time_music:  # wait for agent if no music playing
                    while act_signal.value == 1:
                        time.sleep(0.001)
                lock.acquire()  # synchronize play time
                # # OLD COMMUNICATION:
                # self.latest_env[2] = self.replay_buffer[-1]
                # self.latest_env[1] = self.replay_buffer[-2]
                # self.latest_env[0] = self.replay_buffer[-3]
                this_play_time = self.playTime*1000
                if self.audio_state:
                    self.torch_queue.put(self.pydub_bgm[
                            int(this_play_time)-16*self.interval:int(this_play_time)
                        ].get_array_of_samples()
                    )
                    # GIVE UP: record wave
                    # print(this_play_time-last_play_time)
                    # select a larger start time?
                    # # OLD COMMUNICATION:
                    # self.audio_buffer.append(np.asarray(
                    #     self.pydub_bgm[
                    #         int(this_play_time)-16*self.interval:int(this_play_time)
                    #     ].get_array_of_samples(),
                    #     dtype=np.int64
                    # ))
                    # self.latest_env[-1] = self.audio_buffer[-1]
                    # # OLD NOT FIXED AUDIO LENGTH:
                    # last_play_time = this_play_time  # ready for clip but not fixed length
                    # clip_len = np.append(
                    #     clip_len,
                    #     len(self.latest_env[-1]),
                    # )
                act_signal.value = 1
                self.shared_time.value = this_play_time  # ms
                # print('t1', self.shared_time.value, end=' ', flush=True)
                lock.release()
        act_signal.value = -1
        print(' over', end=' ', flush=True)
