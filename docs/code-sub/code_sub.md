---
sidebar_position: 0
---

# Tools

To automate whole process of submision, excecution and leaders tracking [trycubic.com](https://trycubic.com/) web page was made. Here you will be able to access you submissions history, status, video result and rating for all your jobs (every user is able to like other users animations).

# Submiting Your Code

Adding your code to the excecution queue could not be simpler, open [trycubic.com](https://trycubic.com/), login with preffered method, press `Upload code` button, select you files and press upload!

## Sumbition Format

Each submision consists of up to 5 files (additional imges/data files are allowed to be included). Main script of you animation (entry point of your program) must be `main.py`.

## Restrictions

Every script will be ececuted in isolated enviroment and access to internet or files outside the excecution folder will be **NOT** allowed, in this case programm will result with an exception and `failed` status.

:::caution
Please be aware that excecution of your script will be on `Ubuntu 20.04 LTS` machine with `python3.10`
:::

## External dependencies

Excecution enviroment will allready have most popular libraries such as: `numpy` and others, but if your code depends on something else you must list all dependencies sepated by comma in the comment on first line of the `main.py` file:

```python title="main.py"
# cv2, opensimplex, colorsys
from ledcd improt CubeDrawer
import cv2
import opensimplex
import colorsys
drawer = CubeDrawer.get_obj()

...
drawer.show()
...
```
