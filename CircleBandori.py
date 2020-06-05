import pygame
import pydub
import sys
import os
import numpy as np
# import time
import array
from Constant import ConstPara, SongChart, Difficulty
from Background import Background
from Sprite import NoteBarGroup
from CircleJudgement import CircleJudgement


class BandoriCircle:

    def __init__(
            self, height=144, noteSpeed=9.0, songNo=73, difficulty=Difficulty.expert,
            interval=3, audio_state=True, real_music=False, seed=0.0):
        self.const = ConstPara(height=height, noteSpeed=noteSpeed)
        self.screen = pygame.display.set_mode(self.const.size, flags=0, depth=24)  # window size
        self.bg = Background(self.const)
        self.s_c = SongChart(songNo=songNo, difficulty=difficulty)
        self.ng = NoteBarGroup(self.s_c.chartPath, self.const)
        self.in_time_music = real_music  # play music? default is false
        assert not self.in_time_music
        self.playing = True
        # self.delta_t = 15.5 / 1000.
        self.interval = interval
        self.seed = seed
        self.audio_state = audio_state
        # for agent
        self.info = ''
        self.rec_surface = self.screen.subsurface((0, self.const.height / 2, self.const.width, self.const.height / 2))
        self.playTime = self.seed
        self.judge = CircleJudgement(
            self.ng.basic_notes, self.ng.note_bar_note, self.ng.notes_hit)
        self.pydub_bgm = pydub.AudioSegment.from_mp3(self.s_c.songPath)
        self.obs = [0 for _ in range(self.interval+(1 if self.audio_state else 0))]  # screen*3, audio segment
        self.songNo = songNo

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
        self.playTime += 0.016  # 60+ frames in 1s
        self.screen.fill((0, 0, 0))
        self.bg.draw_lane(self.screen)
        self.ng.bar_update_draw(
            self.screen,
            self.playTime,
        )
        self.bg.draw_line(self.screen)
        self.ng.note_update_draw(
            self.screen,
            self.playTime,
        )
        # show song No. for debug?
        textSurface = pygame.font.Font(None, 32)
        text = textSurface.render(str(self.songNo), 1, (255,255,255))
        self.screen.blit(text, (0,0))
        pygame.display.update()

    def music_slice(self, time):
        if time > len(self.pydub_bgm):
            p1 = self.pydub_bgm[time-self.interval*16:].get_array_of_samples()
            l = len(self.pydub_bgm[0:16*self.interval].get_array_of_samples())-len(p1)
            return p1+array.array('i', [0 for _ in range(l)])
        else:
            return self.pydub_bgm[time-self.interval*16:time].get_array_of_samples()

    # adapt for openai-gym, in_time_music is False
    def step(self, act):
        assert not self.in_time_music
        reward = self.judge.judge(self.playTime, act)
        if self.judge.no_life_now == 1 or self.playTime >= self.ng.note_end_time+1:
            # dead / finish
            self.obs = self.reset()
            done =True
        else:
            # go on
            done = False
            for i in range(self.interval):
                self.update()
                self.obs[i] = pygame.surfarray.array3d(self.rec_surface)
            if self.audio_state:
                self.obs[-1] = self.music_slice(int(self.playTime*1000))
        return self.obs, reward, done, self.info

    def reset(self):
        self.playTime = self.seed
        self.screen.fill((0, 0, 0))
        self.bg.draw_lane(self.screen)
        self.bg.draw_line(self.screen)
        s = pygame.surfarray.array3d(self.rec_surface)
        if not self.audio_state:
            return [s, s, s]
        else:
            return [s, s, s, np.zeros_like(self.pydub_bgm[0:16*self.interval].get_array_of_samples())]
