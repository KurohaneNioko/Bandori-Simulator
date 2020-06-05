import os, time
import numpy as np
import pydub
np.set_printoptions(threshold=np.inf)

sound = None
start = time.perf_counter()
bgm = pydub.AudioSegment.from_mp3('song\\073.mp3')
for i in range(int(1e5)):
    sound = np.asarray(
        bgm[i:i+3*16].get_array_of_samples(),
        dtype = np.int64
    )
print(time.perf_counter()-start)

print(len(sound)/124)
# print(sound[48000*2*10:48000*2*11])