import sys
import json
import os
import pygame
from enum import Enum


class Difficulty(Enum):
    easy = 1
    normal = 2
    hard = 3
    expert = 4


class NoteType(Enum):
    flick = 'flick'
    long = 'long'
    normal = 'normal'
    sim = 'simultaneous_line'
    slide = 'slide_among'


class NoteInfo:

    def __init__(self):
        self.notesPNG = pygame.image.load("res/note 0.png")
        with open('res/note 0.json', 'r') as f:
            self.ni = json.load(f)['frames']
            f.close()

    def __call__(self, notetype, lane=None):
        # lane in chart:    1 ~ 7
        # lane in self.ni:  0 ~ 6
        # long means long_start / end
        if notetype not in ['flick', 'long', 'normal', 'simultaneous_line', 'slide_among']:
            print('Unsupported Note Type.', file=sys.stderr)
            sys.exit(-3)
        if notetype in ['flick', 'long', 'normal'] and \
                (type(lane) is not int or lane > 7 or lane < 1):
            print('Invalid Lane Number.', file=sys.stderr)
            sys.exit(-2)
        return \
            self.ni['note_'+notetype+'_'+str(lane-1)+'.png']['frame'] \
                if notetype in ['long', 'normal'] else \
            (self.ni['note_'+notetype+'_'+str(lane-1)+'.png']['frame'],
             self.ni['note_flick_top.png']['frame']) \
                if notetype is 'flick' else \
            self.ni['simultaneous_line.png']['frame'] \
                if notetype is 'simultaneous_line' else \
            self.ni['note_slide_among.png']['frame']


class NoteIMG:

    def __init__(self):
        # as pygame.image.load will close the file buffers automatically
        # use sprite png or save pic root?
        self.note_img = {
            'long': ['res/chop/' + 'long' + '_' + str(i) + '.png' for i in range(1, 8)],
            'slide_among': ['res/chop/' + 'slide_among' + '.png'],
            'flick': ['res/chop/' + 'flick' + '_' + str(i) + '.png' for i in range(1, 8)],
            'flick_top': ['res/chop/flick_top.png'],
            'normal': ['res/chop/' + 'normal' + '_' + str(i) + '.png' for i in range(1, 8)],
            'simultaneous_line': ['res/chop/' + 'simultaneous_line' + '.png']
        }

    def get(self, noteType, lane):
        if noteType in [NoteType.long, NoteType.flick, NoteType.normal]:
            if not (1 <= lane <= 7):
                print('Invalid Lane Number.', file=sys.stderr)
                sys.exit(-2)
            elif noteType != NoteType.flick:
                return self.note_img[noteType.value][lane-1]
            else:
                return (self.note_img[noteType.value][lane-1], self.note_img['flick_top'][0])
        if noteType in [NoteType.sim, NoteType.slide]:
            return self.note_img[noteType.value][0]

    # def __del__(self):
    #     for v in self.note_img.values():
    #         for f in v:
    #             f.close()


class ConstPara:

    def __init__(self, height=720, noteSpeed=9.0):
        # screen
        # lane: 1160 * 610
        # line: 1800 * 38
        self.size = self.width, self.height = int(height*16/9), height
        self.laneWidth = 0.8 * self.width
        self.laneHeight = self.laneWidth / 2 / 0.875
        self.lineOffset = 1.225 * self.laneHeight * (0.5 - 0.225 / 1.225)
        # background para
        self.lane1HeightDivWidth = 610.0 / 1160.0
        self.lane1ScaleWidth = 1160 * self.laneWidth / 1080
        self.lane1ScaleHeight = self.lane1HeightDivWidth * self.lane1ScaleWidth
        # note
        self.noteSpeed = noteSpeed
        self.noteWidth = self.lane1ScaleWidth / 7
        self.noteScreenTime = 5.5 - (self.noteSpeed - 1) / 2.0


class SongChart:

    def __init__(self, songNo, difficulty=Difficulty.expert):
        # song & chart
        songNoStr = str(songNo) if songNo > 99 else '0' + str(songNo) if songNo > 9 else '00' + str(songNo)
        self.songPath = 'song/' + songNoStr + '.mp3'
        self.chartPath = "chart/" + Difficulty(difficulty).name + '/' + str(songNo) + '.' + Difficulty(difficulty).name + '.json'
        if not os.path.exists(self.songPath) or not os.path.exists(self.chartPath):
            print('Song', songNo, 'Not Found')
            sys.exit(-1)


class Action(Enum):
    release = 0
    tap = 1
    flick = 2