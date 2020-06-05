# from Constant import Action
from Constant import NoteType as nt
from Constant import Action
from enum import Enum


class Grade(Enum):
    perfect, great, good, bad, miss = [10, 5, -5, -50, -100]


class CircleJudgement:

    def __init__(self, N, NBN, NH):
        self.notes, self.note_bar_note, self.note_hit = N, NBN, NH
        self.frame_time = 1000. / 60.  # ms
        self.grade = [None for _ in range(len(self.notes))]
        self.last_acts = None
        self.note_index = 0
        self.act_mark = int('00', 2)
        # aim
        self._left = -1
        self._right = 1
        self._miss = 0
        # summary
        self.no_life_now = 0

    def mark(self, index, grade, hit_side):
        self.grade[index] = grade
        # mark note as invisible
        self.note_hit[index] = True
        # mark action as used
        if hit_side == self._left:
            self.act_mark |= int('10', 2)
        elif hit_side == self._right:
            self.act_mark |= int('01', 2)
        return grade.value

    def hit_act(self, note_lane, note_type, left_lane, left_act, right_lane, right_act):
        tap = note_type==nt.slide or note_type==nt.normal or note_type==nt.long
        flick = note_type==nt.flick
        if (self.act_mark & int('10',2))==0 and note_lane == left_lane and \
            ((tap and left_act == Action.tap.value) or (flick and left_act==Action.flick.value)):
            # self.act_mark |= int('10', 2)
            return self._left
        if (self.act_mark & int('01',2))==0 and note_lane == right_lane and \
            ((tap and right_act == Action.tap.value) or (flick and right_act==Action.flick.value)):
            # self.act_mark |= int('01', 2)
            return self._right
        return self._miss

    def check_life(self):
        life = 1000
        for e in self.grade:
            if e: life += e.value
            if life < 0:
                self.no_life_now = 1
                break

    def judge(self, time, action):
        # action -> [(lane, act), (lane, act)]
        # earlier -> negateive, late -> positive
        # type -> nt.normal, nt.long, nt.flick, nt.slide
        # time -> ms

        # get the check range START, [note_index, note_end_index)
        for i in range(self.note_index, len(self.notes)):
            if self.grade[i] is not None:
                self.note_index += 1
                continue
            if self.grade[i] is None:   # make sure judging all notes
                break
        # get the check range END, [note_index, note_end_index)
        note_end_index, stop_point = self.note_index+1, 0
        if self.note_index < len(self.notes):
            for i in range(self.note_index, len(self.notes)):
                if not (time-self.notes[i].time) >= -8 * self.frame_time:
                    note_end_index = max(note_end_index, i)
                    break
        # duplicate for no end
        note_end_index = max(note_end_index, stop_point)
        # print(self.note_index, note_end_index, int(time), end=' || ')

        reward = 0
        # if self.last_acts is None:
        #     self.last_acts = action  # strict action ?
        if self.note_index < len(self.notes):
            left_lane, left_act, right_lane, right_act = action
            self.act_mark = int('00', 2)  # bit mark
            for i in range(self.note_index, note_end_index):
                # print(self.notes[i].type.value, self.notes[i].lane, self.notes[i].time, end='; ')
                t = (time - self.notes[i].time)/self.frame_time
                hit = self.hit_act(self.notes[i].lane, self.notes[i].type, left_lane, left_act, right_lane, right_act)
                if self.notes[i].type == nt.normal or self.notes[i].type == nt.flick:
                    if t > 8:   reward += self.mark(i, Grade.miss, hit)
                    elif hit != self._miss:
                        if 7 < t <= 8 or -7 <= t < -6:    reward += self.mark(i, Grade.bad, hit)
                        elif 6 < t <= 7 or -6 <= t < -5:    reward += self.mark(i, Grade.good, hit)
                        elif 3 < t <= 6 or -5 <= t < -2:    reward += self.mark(i, Grade.great, hit)
                        elif -2 <= t <= 3:    reward += self.mark(i, Grade.perfect, hit)
                elif self.notes[i].type == nt.long:
                    if t > 9:   reward += self.mark(i, Grade.miss, hit)
                    elif hit != self._miss:
                        if 8 < t <= 9 or -8 <= t < -7:    reward += self.mark(i, Grade.bad, hit)
                        elif 7 < t <= 8 or -7 <= t < -6:    reward += self.mark(i, Grade.good, hit)
                        elif 4 < t <= 7 or -6 <= t < -3:    reward += self.mark(i, Grade.great, hit)
                        elif -3 <= t <= 4:    reward += self.mark(i, Grade.perfect, hit)
                elif self.notes[i].type == nt.slide:
                    if t > 12:   reward += self.mark(i, Grade.miss, hit)
                    elif hit != self._miss:
                        if 0 <= t <= 12:    reward += self.mark(i, Grade.perfect, hit)
                if self.act_mark == int('11', 2):
                    break
        self.check_life()
        return reward

    def summary(self):
        total_point = 1000
        miss, bad, good, great, perfect = 0, 0, 0, 0, 0
        for e in self.grade:
            if e:
                total_point += e.value
                if e.name == Grade.miss.name:
                    miss += 1
                elif e.name == Grade.bad.name:
                    bad += 1
                elif e.name == Grade.good.name:
                    good += 1
                elif e.name == Grade.great.name:
                    great += 1
                elif e.name == Grade.perfect.name:
                    perfect += 1
        return '| '+str(total_point)+'pts | '+str(miss)+', '+str(bad)+', '+str(good)+', '+str(great)+', '+str(perfect)
