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

- Every script will be ececuted in isolated enviroment and access to internet or files outside the excecution folder will be **NOT** allowed, in this case programm will result with an exception and `failed` status.
- **Only 2 pending jobs are allowed per each user** (Please wait until you submited jobs will be proceseeded and submit new ones).
- Each submition job will be excecuted maximum for **1 min** (_each animation will be played until program ends or 1 minute timer ends_)

:::caution
Please be aware that excecution of your script will be on `Ubuntu 21.10` (_with **gtx 1080 ti** and **AMD Ryzen 5 2600**_) machine with `python3.10`
:::

## External dependencies

Excecution enviroment will allready have most popular libraries such as: `numpy` and others, but if your code depends on something else you must list all dependencies sepated by comma in the comment on first line of the `main.py` file (_MAX 10 additional modules are allowed, please contact me directly if you need more_):

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
