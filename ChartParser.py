import os
import json


class ChartParser:
    """
    --json detail--
    Single: Tap
    SingleOff: weak note, Tap
    Skill: now same as Single
    long: long start / end
    bar: green belt
    Tick: green bar's link
    sim: line
    Flick: pink
    """

    def __init__(self, song_id, difficulty):
        chart_path = 'chart/'+str(song_id)+'.'+difficulty+'.json'
        if not os.path.exists(chart_path):
            raise IOError('Chart', song_id, 'Not Found.')
        else:
            with open(chart_path, 'r') as f:
                self.chart = json.load(f)
                f.close()

if False:
    cp = ChartParser(73, 'expert')
    print(cp.chart)
    x = 14
    print(type(cp.chart[x]['type']))
    print(type(cp.chart[x]['lane']))
    print(type(cp.chart[x]['time']))
    type_set = set()
    for e in cp.chart:
        if e['type'] not in type_set:
            type_set.add(e['type'])
    print(type_set)
