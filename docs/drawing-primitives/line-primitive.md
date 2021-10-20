---
sidebar_position: 2
---

# Line

Filles space between 2 points with some offset(line width).

## Definition:

```python title="Simplified definition"
def line(x1, y1, z1, x2, y2, z2, line_width = 0.5)
def line(vec1, vec2, line_width = 0.5)
```

```python title="Complete definition"
def line(x1: float | int, y1: float | int, z1: float | int, x2: float | int, y2: float | int, z2: float | int, line_width = 0.5: float | int) -> None
def line(vec1: list[float | int] | tuple[float | int], vec2: list[float | int] | tuple[float | int], line_width = 0.5: float | int) -> None
```

|          Property           |                  Description                   |               Accepted values                |
| :-------------------------: | :--------------------------------------------: | :------------------------------------------: |
|           **x1**            |           X - component of 1st point           |               _**any number**_               |
|           **y1**            |           Y - component of 1st point           |               _**any number**_               |
|           **z1**            |           Z - component of 1st point           |               _**any number**_               |
|           **x2**            |           X - component of 2nd point           |               _**any number**_               |
|           **y2**            |           Y - component of 2nd point           |               _**any number**_               |
|           **z2**            |           Z - component of 2nd point           |               _**any number**_               |
|                             |                                                |                                              |
|          **vec1**           |  Structure with x, y, z values for 1st point   | _**tuple or list of numbers with length 3**_ |
|          **vec2**           |  Structure with x, y, z values for 2nd point   | _**tuple or list of numbers with length 3**_ |
|                             |                                                |                                              |
| **line_width** _(optional)_ | Width of the line in world space. Default: 0.5 |         _**none**_/_**any number**_          |

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer
from random import random
from time import sleep

drawer = CubeDrawer.get_obj()
drawer.draw_immediate = True

while True:
    drawer.clear()

    drawer.set_color(0.353, 0.859, 1.000)
    drawer.line(0, 0, 0, 0, 9, 0)

    drawer.set_color(125, 29, 63)
    drawer.line((15, 0, 15), (15, 0, 8))

    drawer.set_color(0.894, 0.941, 0.816)
    drawer.line([0, 0, 15], [15, 15, 0])

    drawer.set_color(27, 44, 193)
    drawer.line(0, 15, 0, 15, 15, 15)
```

<script>
  let _ = () => {
    (() => {
      document["cur_state"] = -1;

      document["ind_line_map"] = new Object();
      document.ind_line_map[0] = 8;
      document.ind_line_map[1] = 10;
      document.ind_line_map[2] = 11;
      document.ind_line_map[3] = 13;
      document.ind_line_map[4] = 14;
      document.ind_line_map[5] = 16;
      document.ind_line_map[6] = 17;
      document.ind_line_map[7] = 19;
      document.ind_line_map[8] = 20;

      window.addEventListener("message", function (e) {
          if (e.data == document.cur_state || e.data < 0)
            return;
          
          const tmp = document.querySelectorAll("#code_block_hidden ~ div .token-line")[document.ind_line_map[document.cur_state]];
          if (tmp)
            if (tmp.classList.contains("active_code_line"))
              tmp.classList.remove("active_code_line")

          document.cur_state = e.data;
          const tmp1 = document.querySelectorAll("#code_block_hidden ~ div .token-line")[document.ind_line_map[document.cur_state]];
          if (tmp1)
            tmp1.classList.add("active_code_line")
          
      }, false);


    })()
  }
</script>

<iframe src="http://127.0.0.1:5500/public/examples/line/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
