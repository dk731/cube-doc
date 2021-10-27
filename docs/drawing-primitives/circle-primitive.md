---
sidebar_position: 4
---

# Circle

Draw 2D circle, circle line or filled circle, default drawing plane is X,Y.

## Definition:

```python title="Simplified definition"
# Circles
def circle(x, y, z, r)
def circle(p_vec, r, line_width=0.5, thickness=0.5)

def filled_circle(x, y, z, r)
def filled_circle(vec, r)


# Ellipses
def ellipse(x, y, z, rx, ry, line_width, thickness = 0.5)
def ellipse(p_vec, r_vec, line_width = 0.5, thickness = 0.5)

def filled_ellipse(x, y, z, rx, ry, thickness = 0.5)
def filled_ellipse(p_vec, r_vec, thickness = 0.5)
```

```python title="Complete definition"
# Circles
def circle(x: float | int, y:float | int, z: float | int, r: float | int) -> None
def circle(vec: list[float | int] | tuple[float | int], r: float | int, line_width = 0.5: float | int, thickness = 0.5: float | int) -> None

def filled_circle(x: float | int, y: float | int, z: float | int, r: float | int) -> None
def filled_circle(vec: list[float | int] | tuple[float | int], r: float | int) -> None


# Ellipses
def circle(x: float | int, y: float | int, z: float | int, rx: float | int, ry: float | int, line_width: float | int, thickness = 0.5: float | int) -> None
def circle(p_vec: list[float | int] | tuple[float | int], r_vec: list[float | int] | tuple[float | int], line_width = 0.5: float | int, thickness = 0.5: float | int) -> None

def filled_circle(x: float | int, y: float | int, z: float | int, rx: float | int, ry: float | int, thickness = 0.5: float | int) -> None
def filled_circle(p_vec: list[float | int] | tuple[float | int], r_vec: list[float | int] | tuple[float | int], thickness = 0.5: float | int) -> None
```

|          Property           |                      Description                      |                  Accepted values                   |
| :-------------------------: | :---------------------------------------------------: | :------------------------------------------------: |
|            **x**            |         X - component of circle center point          |                  _**any number**_                  |
|            **y**            |         Y - component of circle center point          |                  _**any number**_                  |
|            **z**            |         Z - component of circle center point          |                  _**any number**_                  |
|            **r**            |                   Radius of circle                    |                  _**any number**_                  |
|                             |                                                       |                                                    |
|          **p_vec**          | Structure with x, y, z values for circle center point | _**tuple**_ or _**list of numbers with length 3**_ |
|                             |                                                       |                                                    |
|           **rx**            |                 X - radius of ellipse                 |                  _**any number**_                  |
|           **ry**            |                 Y - radius of ellipse                 |                  _**any number**_                  |
|          **r_vec**          |    Structure with x, y values for ellipse radiuses    | _**tuple**_ or _**list of numbers with length 2**_ |
|                             |                                                       |                                                    |
| **line_width** _(optional)_ |               Line with of circle line                |                  _**any number**_                  |
| **thickness** _(optional)_  |               Thickness/depth of circle               |                  _**any number**_                  |

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

    drawer.set_color(255)
    drawer.circle(4, 4, 0, 3)

    drawer.set_color(110, 68, 255)
    drawer.ellipse(6, 12, 0, 4, 2, 1)

    drawer.set_color(0.592, 0.8, 0.016)
    drawer.ellipse(12, 6, 0, 2, 4, 1)

    drawer.set_color(255, 0, 84)
    drawer.ellipse(7.5, 7.5, 15, 7.5, 7.5, 1)

    drawer.set_color(0.965, 0.682, 0.176)
    drawer.filled_circle(4, 4, 13, 2.5)

    drawer.set_color(77, 161, 169)
    drawer.filled_ellipse(10, 10, 11, 4, 2)

    drawer.set_color(0.200, 0.631, 0.992)
    drawer.filled_ellipse(7.5, 7.5, 6, 3, 3, 2)

    drawer.set_color(219, 48, 105)
    drawer.circle(7.5, 7.5, 6, 5.5, 5.5, 1, 2)
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
      document.ind_line_map[9] = 22;
      document.ind_line_map[10] = 23;
      document.ind_line_map[11] = 25;
      document.ind_line_map[12] = 26;
      document.ind_line_map[13] = 28;
      document.ind_line_map[14] = 29;
      document.ind_line_map[15] = 31;
      document.ind_line_map[16] = 32;

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

<iframe src="http://cube.grvcp.lv/examples/circle/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
