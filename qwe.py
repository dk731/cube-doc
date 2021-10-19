from ledcd import CubeDrawer
from random import random
from time import sleep

drawer = CubeDrawer.get_obj()

while True:
    drawer.set_color(random(), random(), random())  # set radnom brush colro
    drawer.point(
        random() * 15, random() * 15, random() * 15
    )  # draw point at radom location [0-15]
    drawer.show()

    sleep(0.5)
