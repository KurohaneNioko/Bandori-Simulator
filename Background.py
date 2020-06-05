import pygame


class Background(pygame.sprite.Sprite):

    def __init__(self, const):
        super(Background, self).__init__()
        # para copy
        self.screen_width = const.width
        self.screen_height = const.height
        self.lineOffset = const.lineOffset
        self.lane1ScaleWidth = const.lane1ScaleWidth
        # lane (rail)
        lane1 = pygame.image.load('res/bg_line_rhythm.png')
        self.__lane1ScaleHeight = const.lane1HeightDivWidth * self.lane1ScaleWidth
        self.__laneSurface = pygame.transform.smoothscale(lane1, (round(self.lane1ScaleWidth), round(self.__lane1ScaleHeight)))
        # line (judgement)
        line1 = pygame.image.load('res/game_play_line.png')
        self.line1HeightDivWidth = 38.0 / 1800.0
        self.__line1ScaleWidth = 1800 * const.laneWidth / 1080
        self.__line1ScaleHeight = self.__line1ScaleWidth * self.line1HeightDivWidth
        self.__lineSurface = pygame.transform.smoothscale(line1, (round(self.__line1ScaleWidth), round(self.__line1ScaleHeight)))

    def draw_lane(self, screen):
        screen.blit(self.__laneSurface,
                    (self.screen_width / 2 - self.lane1ScaleWidth / 2,
                     self.screen_height / 2 + self.lineOffset - self.__lane1ScaleHeight))

    def draw_line(self, screen):
        screen.blit(self.__lineSurface,
                    (self.screen_width / 2 - self.__line1ScaleWidth / 2,
                     self.screen_height / 2 + self.lineOffset - self.__line1ScaleHeight / 2))