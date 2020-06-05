import numpy as np
import random
from tianshou.env import BaseVectorEnv

class MyVectorEnv(BaseVectorEnv):
    """adaption for bandori
    Dummy vectorized environment wrapper, implemented in for-loop.
    .. seealso::

        Please refer to :class:`~tianshou.env.BaseVectorEnv` for more detailed
        explanation.
    """

    def __init__(self, envs):
        self.env_num = len(envs)
        self.envs = envs

    def __len__(self):
        """Return len(self), which is the number of environments."""
        return self.env_num

    def reset(self, id=None):
        if id is None:
            self._obs = np.stack([e.reset() for e in self.envs])
        else:
            if np.isscalar(id):
                id = [id]
            for i in id:
                self._obs[i] = self.envs[i].reset()
        return self._obs

    def step(self, action):
        assert len(action) == self.env_num
        result = [e.step(a) for e, a in zip(self.envs, action)]
        self._obs, self._rew, self._done, self._info = zip(*result)
        self._obs = np.stack(self._obs)
        self._rew = np.stack(self._rew)
        self._done = np.stack(self._done)
        self._info = np.stack(self._info)
        return self._obs, self._rew, self._done, self._info

    def seed(self, seed=None):
        # seed in bandori means starting time (from 0 to 16 ms)
        if isinstance(seed, int) and 0<=seed<=16:
            seed = [seed for _ in range(self.env_num)]
        elif seed is None:
            seed = [random.randint(0, 16)/1000. for _ in range(self.env_num)]
        result = []
        for e, s in zip(self.envs, seed):
            if hasattr(e, 'seed'):
                result.append(e.seed(s))
        return result

    def close(self):
        # return [e.close() for e in self.envs]
        pass  # no close

    def render(self, **kwargs):
        pass
