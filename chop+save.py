import pygame
import sys
from Constant import NoteType, NoteIMG, NoteInfo

ni = NoteInfo()
nt = NoteType()
nt_img = NoteIMG()


def foo(noteType, lane):
    if noteType is not nt.flick:
        image = ni.notesPNG.subsurface(
            list(ni(noteType, lane).values())
        ).copy()
    elif noteType is nt.flick:
        flick_body, flick_top = ni(nt.flick, lane)
        _, __, wb, hb = flick_body.values()
        _, __, wt, ht = flick_top.values()
        flick_body = ni.notesPNG.subsurface(
            list(flick_body.values())
        )
        flick_top = ni.notesPNG.subsurface(
            list(flick_top.values())
        )
        pygame.image.save(flick_body, "res/" + noteType + '_' + str(lane) + '.png')
        image = pygame.Surface((wb, hb+round(ht/1.5)), pygame.SRCALPHA)
        image.blit(flick_body, (0, image.get_height()-hb))
        image.blit(flick_top, (round((wb-wt)/2),0))
    
    else:
        print('Unsupported Note Type.', file=sys.stderr)
        sys.exit(-3)
    pygame.image.save(image, "res/2UN"+noteType+'_'+str(lane)+'.png')


[foo(nt.flick, i) for i in range(1, 8)]