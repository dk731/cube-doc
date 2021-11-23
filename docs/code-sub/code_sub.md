---
sidebar_position: 0
---

# Tools

To automate the whole process of submission, execution, and leaders tracking, [trycubic.com](https://trycubic.com/) web page was made. Here, you will access your submissions history, status, video result, and rating for all your jobs (every user can like other users' animations).

# Submiting Your Code

Adding your code to the execution queue could not be more straightforward. Open [trycubic.com](https://trycubic.com/), log in with the preferred method, press the `Upload code` button, select your files, and press upload!

## Submission Format

Each submission consists of up to 5 files (additional images/data files are allowed). The main script of your animation (entry point of your program) must be `main.py`.

## Restrictions

- Every script will be executed in an isolated environment, and access to the internet or files outside the execution folder will be **NOT** be allowed. In this case, the program will result with an exception and `failed` status.
- **Only two pending jobs are allowed per user** (Please wait until you submitted assignments would be processed and submit new ones).
- Each submission job will be executed maximum for **1 min** (_each animation will be played until the program ends or 1-minute timer ends_)

:::caution
Please be aware that the execution of your script will be on `Ubuntu 21.10` (_with **GTX 1080 ti** and **AMD Ryzen 5 2600**_) machine with `python3.10`
:::

## External dependencies

Execution environment will already have the most popular libraries such as: `numpy` and others, but if your code depends on something else, you must list all dependencies separated by a comma in the comment on the first line of the `main.py` file (_MAX 10 additional modules are allowed, please get in touch with me directly if you need more_):

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
