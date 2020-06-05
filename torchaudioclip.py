from typing import Tuple, Optional
import torch
from torch.tensor import Tensor

def complex_norm(
        complex_tensor: Tensor,
        power: float = 1.0
) -> Tensor:
    r"""Compute the norm of complex tensor input.

    Args:
        complex_tensor (Tensor): Tensor shape of `(..., complex=2)`
        power (float): Power of the norm. (Default: `1.0`).

    Returns:
        Tensor: Power of the normed input tensor. Shape of `(..., )`
    """
    if power == 1.0:
        return torch.norm(complex_tensor, 2, -1)
    return torch.norm(complex_tensor, 2, -1).pow(power)


def angle(
        complex_tensor: Tensor
) -> Tensor:
    r"""Compute the angle of complex tensor input.

    Args:
        complex_tensor (Tensor): Tensor shape of `(..., complex=2)`

    Return:
        Tensor: Angle of a complex tensor. Shape of `(..., )`
    """
    return torch.atan2(complex_tensor[..., 1], complex_tensor[..., 0])


def magphase(
        complex_tensor: Tensor,
        power: float = 1.0
) -> Tuple[Tensor, Tensor]:
    r"""Separate a complex-valued spectrogram with shape `(..., 2)` into its magnitude and phase.

    Args:
        complex_tensor (Tensor): Tensor shape of `(..., complex=2)`
        power (float): Power of the norm. (Default: `1.0`)

    Returns:
        (Tensor, Tensor): The magnitude and phase of the complex tensor
    """
    mag = complex_norm(complex_tensor, power)
    phase = angle(complex_tensor)
    return mag, phase


def amplitude_to_DB(
        x: Tensor,
        multiplier: float,
        amin: float,
        db_multiplier: float,
        top_db: Optional[float] = None
) -> Tensor:
    r"""Turn a tensor from the power/amplitude scale to the decibel scale.

    This output depends on the maximum value in the input tensor, and so
    may return different values for an audio clip split into snippets vs. a
    a full clip.

    Args:
        x (Tensor): Input tensor before being converted to decibel scale
        multiplier (float): Use 10. for power and 20. for amplitude
        amin (float): Number to clamp ``x``
        db_multiplier (float): Log10(max(reference value and amin))
        top_db (float or None, optional): Minimum negative cut-off in decibels. A reasonable number
            is 80. (Default: ``None``)

    Returns:
        Tensor: Output tensor in decibel scale
    """
    x_db = multiplier * torch.log10(torch.clamp(x, min=amin))
    x_db -= multiplier * db_multiplier

    if top_db is not None:
        x_db = x_db.clamp(min=x_db.max().item() - top_db)

    return x_db


def stft_and_db(s) -> Tensor:
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    if not isinstance(s, torch.Tensor):
        s = torch.tensor(s, device=device, dtype=torch.float32)
    return amplitude_to_DB(
        magphase(
            s.stft(512, normalized=False)
        )[0],
        multiplier=10.,
        amin=1e-05,
        db_multiplier=1e-05)  # auto flatten by DNN