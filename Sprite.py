import pygame
import json
from Constant import NoteType as nt
from Constant import NoteIMG
from multiprocessing import Array
nt_img = NoteIMG()
Const = None


class Note(pygame.sprite.Sprite):

    def __init__(self, noteType, time, lane=None):
        pygame.sprite.Sprite.__init__(self)
        self.type = noteType
        if noteType != nt.sim and noteType != 'Bar' and noteType != nt.flick:
            self.origin_images = [pygame.image.load(nt_img.get(noteType, lane))]
            self.x, self.y = [0], [0]
        if noteType == nt.flick:
            flick_parts = nt_img.get(noteType, lane)
            self.origin_images = [pygame.image.load(e) for e in flick_parts]
            self.x, self.y = [0 for _ in flick_parts], [0 for _ in flick_parts]
        self.initWidth = [e.get_width() for e in self.origin_images]
        self.initHeight = [e.get_height() for e in self.origin_images]
        self.images = [e for e in self.origin_images]
        self.lane = lane
        self.time = time
        # position
        self.rect = [e.get_rect() for e in self.images]
        self.visible = False
        self.diametor = 1.0
        # judge
        self.hit = 0

    def time2Pos(self, currentTime):
        global Const
        # trackID: 1 -> 7
        t = self.time - currentTime
        a = -0.94 * Const.laneHeight
        a *= 1 - pow(1.1, -t / Const.noteScreenTime * 50)
        scale = (a + Const.laneHeight) / Const.laneHeight
        _x = (self.lane - 4) * Const.laneWidth / 7.0 * scale
        _y = a
        # little trick(2-i) for the anchor of flick_top
        self.x = [Const.width / 2 + _x - e.get_width() / 2 for e in self.images]
        self.y = [Const.height / 2 + Const.lineOffset + _y - self.images[i].get_height() / (2-i) for i in range(len(self.x))]
        self.visible = t <= Const.noteScreenTime and a < Const.height + 49 and not self.hit
        self.diametor = scale * Const.noteWidth / 154 * .64

    def scale(self):
        global Const
        # diameter: scale rate 放大倍数
        scaled_sizes = [
            [round(self.initWidth[i]*self.diametor), round(self.initHeight[i]*self.diametor)] for i in range(len(self.x))
        ]
        # print(scaled_size)
        # important! save the origin img, then scale it and save it as another surface!!!!
        self.images = [pygame.transform.smoothscale(self.origin_images[i], scaled_sizes[i]) for i in range(len(self.x))]
        self.rect = [pygame.rect.Rect(self.x[i], self.y[i], *(scaled_sizes[i])) for i in range(len(self.x))]

    def update(self, t, *argv):
        self.time2Pos(t, *argv)
        if self.visible:
            self.scale()


class Bar(pygame.sprite.Sprite):

    def __init__(self, time, lane):
        pygame.sprite.Sprite.__init__(self)
        # time & lane -> list
        self.times = time
        self.lanes = lane
        self.p0, self.p1 = None, None
        self.visible = False
        # bar color: 4BE371 / 75,227,113, alpha=1.0
        self.color = [75,227,113]
        self.brightness = 0.81

    def time2pos(self, delta_t, lane):
        global Const
        # origin x, y
        t = delta_t
        a = -0.94 * Const.laneHeight
        a *= 1 - pow(1.1, -t / Const.noteScreenTime * 50)
        scale = (a + Const.laneHeight) / Const.laneHeight
        return {
            'visible': t <= Const.noteScreenTime and a < Const.height+49,
            'x': (lane - 4) * Const.laneWidth / 7.0 * scale,
            'y': a,
            'scale': scale
        }
        # self.x = [Const.width / 2 + _x - e.get_width() / 2 for e in self.images]
        # self.y = [Const.height / 2 + Const.lineOffset + _y - self.images[i].get_height() / (2-i) for i in range(len(self.x))]

    def update(self, current_time):
        global Const
        delta_t0 = self.times[0] - current_time # lower time
        delta_t1 = self.times[1] - current_time # higher time
        self.p0 = self.time2pos(delta_t0, self.lanes[0])
        self.p1 = self.time2pos(delta_t1, self.lanes[1])
        # state:  (not p0 and not p1)× -> (p0 and not p1)√ ->
        #  maybe [(not p0 and not p1)√] ->
        #         (not p0 and p1)√ -> (not p0 and not p1)×
        self.visible = self.p0['visible'] or self.p1['visible'] or \
                       (self.visible and not self.p1['visible'] and not self.p0['visible'] and delta_t1 > 0)
        # (t0 >=0 or t1 >= 0) and p0['visible'], draw

    def draw(self, surface):
        global Const
        # if t0 < 0: cut -> incomplete
        # h = p0['scale'] * Const.noteWidth / 154 * .64
        polygon_cord = [None, None, None, None]
        # higher cord
        x0_2 = Const.width / 2 + self.p1['x']
        y2 = Const.height / 2 + Const.lineOffset + self.p1['y']
        delta_x2 = Const.noteWidth / 2 * self.p1['scale']
        x2_right = x0_2 + delta_x2
        x2_left = x0_2 - delta_x2
        polygon_cord[-2] = (x2_right,y2)
        polygon_cord[-1] = (x2_left,y2)
        # lower cord, if it's too low, cut it in the edge
        x0_1 = Const.width / 2 + self.p0['x']
        y1 = Const.height / 2 + Const.lineOffset + self.p0['y']
        delta_x1 = Const.noteWidth / 2 * self.p0['scale']
        x1_left = x0_1 - delta_x1
        x1_right = x0_1 + delta_x1
        if y1 > Const.height + 49:
            k1 = (x2_left-x1_left)/(y2-y1)
            # x - x1 = k(y - y1)
            x1_left = x1_left + k1 * (Const.height+49-y1)
            k2 = (x2_right-x1_right)/(y2-y1)
            x1_right = x1_right + k2 * (Const.height+49-y1)
            polygon_cord[0] = (x1_left, Const.height+49)
            polygon_cord[1] = (x1_right, Const.height+49)
        else:
            polygon_cord[0] = (x1_left, y1)
            polygon_cord[1] = (x1_right, y1)
        # if self.lanes[0] == self.lanes[1] == 7 and self.times[0] > 13:
        #     print(self.times, polygon_cord)
        pygame.draw.polygon(surface, list(map(lambda x: int(x*self.brightness), self.color)), polygon_cord)


class BasicNote:

    def __init__(self, type, lane, time):
        self.type = type
        self.lane = lane  # bar -> [x, x]
        self.time = time  # bar -> [x, x]


class NoteBarGroup(pygame.sprite.Group):

    def __init__(self, chart_path, const):
        global Const
        pygame.sprite.Group.__init__(self)
        self.const = const
        Const = const
        with open(chart_path, 'r') as f:
            self.chart = json.load(f)
            f.close()
        # add note/bar
        type_table = {
            'Single': nt.normal,
            'SingleOff': nt.normal,
            'Skill': nt.normal,
            # 'Sim': None,
            'Bar': 'Bar',
            'Long': nt.long,
            'Flick': nt.flick,
            'Tick': nt.slide
        }
        # partly update notes for optimization
        # for pygame, second
        self.notes = []
        self.bars = []
        # for judge, ms
        self.basic_notes = []
        self.note_bar_note = [] # Basic: [note, bar, note] -> for missed press in bar
        self.note_end_time = -1
        for n in self.chart:
            type, lane, time = n['type'], n['lane'], n['time']
            if type == 'Bar':
                # time & lane -> list
                self.bars.append(Bar(time, lane))
                if time[1] > self.note_end_time:
                    self.note_end_time = time[1]
                self.note_bar_note.append([None, BasicNote(type_table[type], lane, [time[0]*1000, time[1]*1000]), None])
            elif type == 'Sim':
                pass
            else:
                self.notes.append(Note(type_table[type], time, lane))
                self.basic_notes.append(BasicNote(type_table[type], lane, time*1000))
                if type in ['Long', 'Flick', 'Tick']:
                    for i in range(len(self.note_bar_note)):
                        if abs(time*1000-self.note_bar_note[i][1].time[0]) < 1e-5 and lane==self.note_bar_note[i][1].lane[0]:
                            self.note_bar_note[i][0] = self.basic_notes[-1]
                        elif abs(time*1000-self.note_bar_note[i][1].time[1]) < 1e-5 and lane==self.note_bar_note[i][1].lane[1]:
                            self.note_bar_note[i][2] = self.basic_notes[-1]
                        if self.note_bar_note[i][1].time[0] > time+1:
                            break
                if time > self.note_end_time:
                    self.note_end_time = time
        print('bars:'+str(len(self.bars)), 'notes:'+str(len(self.notes)), end=' ', flush=True)
        self.notes_hit = Array('b', [False for _ in range(len(self.notes))])
        # print note bar note
        # for e in self.note_bar_note:
        #     print(e[0].type, e[0].lane, e[1].time, e[-1].lane, e[-1].type)
        # update period
        self.note_update_index_start = 0
        self.bar_update_index_start = 0

    def note_smart_blit(self, surface, note):
        for i in range(len(note.images)):
            surface.blit(note.images[i], note.rect[i])

    def note_update_draw(self, surface, currentTime):
        i = self.note_update_index_start
        now_visible = False
        while i < len(self.notes):
            self.notes[i].update(currentTime)
            if self.notes[0].time - currentTime > Const.noteScreenTime:
                break
            self.notes[i].hit = self.notes_hit[i]
            if not now_visible and not self.notes[i].visible:
                i += 1
            elif not now_visible and self.notes[i].visible:
                now_visible = True
                self.note_update_index_start = i
                self.note_smart_blit(surface, self.notes[i])
                i += 1
            elif now_visible and self.notes[i].visible:
                self.note_smart_blit(surface, self.notes[i])
                i += 1
            elif now_visible and not self.notes[i].visible:
                break
        # print(self.update_index_start, self.update_index_end)

    def bar_update_draw(self, surface, currentTime):
        j = self.bar_update_index_start
        now_visible = False
        # different from note because time is a period not point
        upper_bound = len(self.bars)
        while j < len(self.bars) and j < upper_bound+25:
            self.bars[j].update(currentTime,)
            if self.bars[0].times[0] - currentTime > Const.noteScreenTime:
                break
            if not now_visible and not self.bars[j].visible:
                j += 1
            elif not now_visible and self.bars[j].visible:
                now_visible = True
                self.bar_update_index_start = j
                self.bars[j].draw(surface)
                j += 1
            elif now_visible and self.bars[j].visible:
                self.bars[j].draw(surface)
                j += 1
            elif now_visible and not self.bars[j].visible:
                upper_bound = j+25
                j += 1
                # break

    def update_draw(self, *argv):
        self.bar_update_draw(*argv)
        self.note_update_draw(*argv)

    def reset(self):
        self.note_update_index_start = 0
        self.bar_update_index_start = 0
