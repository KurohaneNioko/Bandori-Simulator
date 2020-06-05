import os
os.environ['PYGAME_HIDE_SUPPORT_PROMPT'] = "hide"
import sys
import time
import pygame
import pydub
import pickle
import random
import pprint
import argparse
import numpy as np
import torch
from torch.utils.tensorboard import SummaryWriter

from Constant import Difficulty
from CircleBandori import BandoriCircle
# from CircleJudgement import CircleJudgement
from CircleVectorEnv import MyVectorEnv as VectorEnv
# from tianshou.policy import PPOPolicy
from tianshou.trainer import onpolicy_trainer
from tianshou.data import Collector, ReplayBuffer


def diff_num2diff(diff_num, e):
    # e: song_info
    if e[0] == diff_num:
        return Difficulty.easy
    elif e[1] == diff_num:
        return Difficulty.normal
    elif e[2] == diff_num:
        return Difficulty.hard
    elif e[3] == diff_num:
        return Difficulty.expert
    return -1  # error



def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--task-range', type=int, default=4)
    parser.add_argument('--seed', type=int, default=0)
    parser.add_argument('--buffer-size', type=int, default=20000)
    parser.add_argument('--lr', type=float, default=1e-3)
    parser.add_argument('--gamma', type=float, default=0.99)
    parser.add_argument('--epoch', type=int, default=10)
    parser.add_argument('--step-per-epoch', type=int, default=2000)
    parser.add_argument('--collect-per-step', type=int, default=20)
    parser.add_argument('--repeat-per-collect', type=int, default=2)
    parser.add_argument('--batch-size', type=int, default=64)
    parser.add_argument('--layer-num', type=int, default=1)
    parser.add_argument('--training-num', type=int, default=20)
    parser.add_argument('--test-num', type=int, default=100)
    parser.add_argument('--logdir', type=str, default='log')
    parser.add_argument('--render', type=float, default=0.)
    parser.add_argument(
        '--device', type=str,
        default='cuda' if torch.cuda.is_available() else 'cpu')
    # ppo special
    parser.add_argument('--vf-coef', type=float, default=0.5)
    parser.add_argument('--ent-coef', type=float, default=0.0)
    parser.add_argument('--eps-clip', type=float, default=0.2)
    parser.add_argument('--max-grad-norm', type=float, default=0.5)
    parser.add_argument('--gae-lambda', type=float, default=1)
    parser.add_argument('--rew-norm', type=bool, default=True)
    parser.add_argument('--dual-clip', type=float, default=None)
    parser.add_argument('--value-clip', type=bool, default=True)
    args = parser.parse_known_args()[0]
    return args


if __name__ == '__main__':
    # os parameters
    if sys.platform.startswith('win'):
        pydub.AudioSegment.ffmpeg = './ffmpeg.exe'
        pydub.AudioSegment.ffprobe = './ffprobe.exe'
    HEADLESS = 1
    if HEADLESS > 0:
        os.environ['SDL_AUDIODRIVER'] = 'dummy'
        # if server has a GPU, video dummy is ok, the same as my PC.
        os.environ["SDL_VIDEODRIVER"] = "dummy"
    # pygame initialisation
    torch.cuda.empty_cache()
    pygame.mixer.pre_init(frequency=48000)
    pygame.mixer.init()
    pygame.init()
    pygame.display.set_caption('Bandori Simulator')  # title
    # env/agent global parameters
    args = get_args()
    height = 72  # width must be int!!
    audio_state = True
    interval = 3
    # music pool
    f = open('./metadata/meta.pickle', 'rb')
    song_list, meta = pickle.load(f)
    f.close()
    selection = meta[-1:-(args.task_range + 1):-1]
    print(selection)

    # from BandoriNet import Net, Actor, Critic
    from BandoriNet import BandoriPPO
    from CirclePPO import BandoriPPOPolicy
    args.training_num, args.test_num = 2, 1
    # build envs
    train_envs = []
    for _ in range(args.training_num):
        songNo, songName, diff_num = random.choice(selection)
        diff = diff_num2diff(diff_num, song_list[songNo][-1])
        train_envs.append(BandoriCircle(
            height=height,
            noteSpeed=9.0,
            songNo=int(songNo),
            difficulty=diff,
            interval=interval,
            audio_state=audio_state,
            real_music=False, ))  # True if test, False if train
    train_envs = VectorEnv(train_envs)
    test_envs = []
    for _ in range(args.test_num):
        songNo, songName, diff_num = random.choice(selection)
        diff = diff_num2diff(diff_num, song_list[songNo][-1])
        test_envs.append(BandoriCircle(
            height=height,
            noteSpeed=9.0,
            songNo=int(songNo),
            difficulty=diff,
            interval=interval,
            audio_state=audio_state,
            real_music=False,
            seed=random.randint(0,16)))  # True if test, False if train
    test_envs = VectorEnv(test_envs)
    # args.state_shape = env.observation_space.shape or env.observation_space.n
    args.action_shape = 7*3
    # seed
    # np.random.seed(args.seed)
    # torch.manual_seed(args.seed)
    # train_envs.seed(args.seed)
    # test_envs.seed(args.seed)
    # model
    actor = BandoriPPO(is_actor=True, height=height, interval=interval, audio_state=audio_state, audio_input_size=257*37).to(args.device)
    critic = BandoriPPO(is_actor=False, height=height, interval=interval, audio_state=audio_state, audio_input_size=257*37).to(args.device)
    optim = torch.optim.Adam(list(
        actor.parameters()) + list(critic.parameters()), lr=args.lr)
    dist = torch.distributions.Categorical
    policy = BandoriPPOPolicy(
        actor, critic, optim, dist, args.gamma,
        max_grad_norm=args.max_grad_norm,
        eps_clip=args.eps_clip,
        vf_coef=args.vf_coef,
        ent_coef=args.ent_coef,
        action_range=None,
        gae_lambda=args.gae_lambda,
        reward_normalization=args.rew_norm,
        dual_clip=args.dual_clip,
        value_clip=args.value_clip)
    # collector
    train_collector = Collector(
        policy, train_envs, ReplayBuffer(args.buffer_size))
    test_collector = Collector(policy, test_envs)
    # log
    log_path = os.path.join(args.logdir, str(args.task_range), 'ppo')
    writer = SummaryWriter(log_path)

    def save_fn(policy):
        torch.save(policy.state_dict(), os.path.join(log_path, 'policy.pth'))

    def stop_fn(x):
        return x >= 100

    # trainer
    result = onpolicy_trainer(
        policy, train_collector, test_collector, args.epoch,
        args.step_per_epoch, args.collect_per_step, args.repeat_per_collect,
        args.test_num, args.batch_size, stop_fn=stop_fn, save_fn=save_fn,
        writer=writer)
    assert stop_fn(result['best_reward'])
    train_collector.close()
    test_collector.close()

