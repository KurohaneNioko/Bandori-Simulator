import time
import pickle
import random
from Constant import ConstPara, SongChart, Difficulty
from Sprite import NoteBarGroup
from Judgement import JudgeMent

def rnd_start():    return random.random()*2+48
def rnd_lapse():    return random.random()*4+46

with open('metadata/meta.pickle', 'rb') as f:
    meta, diff = pickle.load(f)
    f.close()
epoch = 500
const = ConstPara(height=72, noteSpeed=9.0)
for e in meta:
    songNo = e[0]
    print(songNo, e[1], rnd_start())
    s_c = SongChart(songNo=int(songNo), difficulty=Difficulty.expert)
    ng = NoteBarGroup(s_c.chartPath, const)
    judge = JudgeMent(ng.basic_notes, ng.note_bar_note)
    for t in range(1, 1+epoch):
        pass

