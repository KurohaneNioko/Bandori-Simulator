import random
import torch


class RLAgent:

    def __init__(self, queue, with_audio, interval):
        # self.judge = judge
        self.interval = interval
        self.with_audio = with_audio
        self.env = [None for _ in range(interval+(1 if with_audio else 0))]
        self.torch_queue = queue
        self.next_state = [None for _ in range(1+(1 if with_audio else 0))]
        self.fft_state = 512

    @staticmethod
    def run(self, time, lock, signal):
        index = 0
        while True:
            self.env[index] = torch.tensor(
                dtype=torch.float16 if index < self.interval else torch.float32,
                data=self.torch_queue.get(), device=torch.device('cuda')
            )
            index += 1
            if index == len(self.env):
                self.env[-1] = self.env[-1].rfft(1, True)
                # print(self.env[-1].shape)
                while signal.value != 1:
                    if signal.value == -1:
                        # print(self.judge.summary(), flush=True, end='')
                        return
                lock.acquire()  # get time and inform circle
                t = time.value
                # print('t2', t, flush=True)
                signal.value = 0
                lock.release()
                # torch.stack()
                # act,  7 3-label output
                act = [random.randint(1,7), random.randint(0,2), random.randint(1,7), random.randint(0,2)]
                #     # reward = self.judge.judge(time=t, action=act)
                #     # if self.judge.no_life_now.value == 1:
                #     #     break
                # next state
                d = self.torch_queue.get()
                self.next_state[0] = torch.tensor(dtype=torch.float16, data=d, device=torch.device('cuda'))
                self.env[0] = torch.tensor(dtype=torch.float16, data=d, device=torch.device('cuda'))
                # print(id(self.next_state[0]), id(self.env[0]))
                if len(self.next_state) > 1:
                    self.next_state[-1] = torch.tensor(dtype=torch.float32,
                        data=self.torch_queue.get(), device=torch.device('cuda')
                    ).rfft(1, normalized=True)
                    # print(self.next_state[-1])
                index = 1
            if signal.value == -1:  # game over
                break
        # print(self.judge.summary(), flush=True, end='')

    def train_(self):
        pass
