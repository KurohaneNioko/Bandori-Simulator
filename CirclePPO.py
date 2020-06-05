import torch
from Constant import Action
from tianshou.data import Batch
from tianshou.policy import PPOPolicy

class BandoriPPOPolicy(PPOPolicy):
    def __init__(self, actor, critic, optim, dist_fn,
                 discount_factor=0.99, max_grad_norm=.5, eps_clip=.2,
                 vf_coef=.5, ent_coef=.01, action_range=None, gae_lambda=0.95,
                 dual_clip=5., value_clip=True, reward_normalization=True,
                 **kwargs):
        super().__init__(actor, critic, optim, dist_fn,
                 discount_factor=0.99, max_grad_norm=.5, eps_clip=.2,
                 vf_coef=.5, ent_coef=.01, action_range=None, gae_lambda=0.95,
                 dual_clip=5., value_clip=True, reward_normalization=True,
                 **kwargs)
        pass

    def forward(self, batch, state=None, **kwargs):
        """Compute action over the given batch data.

        :return: A :class:`~tianshou.data.Batch` which has 4 keys:

            * ``act`` the action.
            * ``logits`` the network's raw output.
            * ``dist`` the action distribution.
            * ``state`` the hidden state.

        .. seealso::

            Please refer to :meth:`~tianshou.policy.BasePolicy.forward` for
            more detailed explanation.
        """
        logits, h = self.actor(batch.obs, state=state, info=batch.info)
        batch_num = logits.shape[0]
        shaped_logits = logits.view(batch_num, 7, len(Action))
        logits_lane = shaped_logits.sum(dim=-1)
        dist_lane = self.dist_fn(logits_lane)
        lanes = dist_lane.sample([2,])
        actions = None
        for i in range(batch_num):
            while lanes[i][0] == lanes[i][1]:
                lanes[i] = self.dist_fn(logits_lane[i]).sample([2,])
            if not actions:
                actions = torch.stack([self.dist_fn(shaped_logits[i].index_select(lanes[i], dim=0)).sample(),])
            else:
                actions.stack([self.dist_fn(shaped_logits[i].index_select(lanes[i], dim=0)).sample(),])
        # unfinished: PPO要求一定要让输出为所有action的概率，不适合我这种编码（即使手动修正也不行）

        for i in range(batch_num):
            assert lanes[i][0] != lanes[i][1]
        # if isinstance(logits, tuple):
        #     dist = self.dist_fn(*logits)
        # else:
        #     dist = self.dist_fn(logits)
        # act = dist.sample()
        if self._range:
            act = act.clamp(self._range[0], self._range[1])
        return Batch(logits=logits, act=act, state=h, dist=self.dist_fn(logits))
