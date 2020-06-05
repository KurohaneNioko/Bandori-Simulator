import os
import requests
import pathlib
import lxml.html as lh
import pickle
from Constant import Difficulty
# till Poppin'Party - UNION

# META_DIR = pathlib.Path('./metadata').absolute().as_posix()
BASE_URL = 'https://bestdori.com'
CHART_DIR = pathlib.Path('../chart').absolute().as_posix()
SONG_DIR = pathlib.Path('../song').absolute().as_posix()


def simple_download(i, force):
    # difficulties = ['easy','normal','hard','expert','special']
    songNo = int(i)
    difficulty = 3
    songNoStr = str(songNo) if songNo > 99 else '0'+ str(songNo) if songNo > 9 else '00'+str(songNo)
    songUrl = 'https://bestdori.com/assets/jp/sound/bgm'+songNoStr+'_rip/bgm'+songNoStr+'.mp3'
    songPath = os.path.join(SONG_DIR, songNoStr+'.mp3')
    if force or not os.path.exists(songPath):
        r = requests.get(songUrl)
        if os.path.exists(songPath):
            print(len(r.content), os.path.getsize(songPath))
        if (not os.path.exists(songPath)) or len(r.content) != os.path.getsize(songPath):
            with open(songPath, "w+b") as f:
                f.write(r.content)
                f.close()
    for d in (1,2,3,4):
        chartUrl = 'https://bestdori.com/api/songs/chart/graphics/simulator/'+str(songNo)+'.'+Difficulty(d).name+'.json'
        chartPath = os.path.join(CHART_DIR, Difficulty(d).name+'/'+str(songNo)+'.'+Difficulty(d).name+'.json')
        if force or not os.path.exists(chartPath):
            r = requests.get(chartUrl)
            if os.path.exists(chartPath):
                print(len(r.content), os.path.getsize(chartPath))
            if (not os.path.exists(chartPath)) or len(r.content) != os.path.getsize(chartPath):
                with open(chartPath, "w+b") as f:
                    f.write(r.content)
                    f.close()
    # print(i)


def chk_dl():
    meta = pickle.load(open('meta.pickle', 'rb'))
    for e in meta[0]:
        simple_download(e[0], False)
        print(e[1])


def meta_info():
    # load https://bestdori.com/info/songs completely then select jp-only & time-descend
    # save #app > div:nth-child(4) > div.column.bg-white > div.p-lr-l.p-tb-l.bg-background > div.has-text-centered
    # as song-meta-xml.txt
    # =====================
    # load https://bestdori.com/info/songmeta completely
    # select difficulty=[easy, normal, hard, special], difficulty-descend
    # save #app > div:nth-child(4) > div.column.bg-white > div.p-lr-l.p-tb-l.bg-background > div:nth-child(5) > div > table > tbody
    # as difficulty-xml.txt
    meta = []
    d = []
    with open('song-meta-xml.txt', 'r', encoding='utf-8') as f:
        s = "".join(f.readlines())
        meta_data = lh.fragment_fromstring(s).getchildren()
        for t in meta_data:
            if not isinstance(t, lh.HtmlComment):
                meta.append([t.get('href').split('/')[-2], t.text_content().strip().split('\n')[0].strip(),
                      t.text_content().strip().split('\n')[-1].strip()])
        f.close()
        print(meta)
        with open('difficulty-xml.txt', 'r', encoding='utf-8') as f:
            s = "".join(f.readlines())
            f.close()
            diff = lh.fragment_fromstring(s).getchildren()
            assert len(diff) == len(meta) << 2
            for e in diff:
                t = list(map(lambda x:x.strip(), e.text_content().split('\n')[1:]))
                id: str = '-1'
                for ee in meta:
                    if ee[1].encode() == t[0].encode():
                        id = ee[0]
                        break
                assert int(id) >= 0
                # print(meta[140][1].encode()==t[0].encode())
                # print(meta[140][1], t[0])
                d.append([id]+t)
        print(d)
        with open('meta.pickle', 'w+b') as f:
            pickle.dump((meta, d), f)
            f.close()


# meta_info()
chk_dl()
