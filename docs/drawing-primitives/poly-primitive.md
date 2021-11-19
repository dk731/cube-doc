---
sidebar_position: 5
---

# Triangle

Draws filled 3D triangle.

## Definition:

```python title="Simplified definition"
def poly(x1, y1, z1, x2, y2, z2, x3, y3, z3, height=0.5)
def poly(p1_vec, p2_vec, p3_vec, height=0.5)
```

```python title="Complete definition"
def poly(x1: float | int, y1: float | int, z1: float | int, x2: float | int, y2: float | int, z2: float | int, x3: float | int, y3: float | int, z3: float | int, height=0.5: float | int) -> None
def poly(p1_vec: list[float | int] | tuple[float | int], p2_vec: list[float | int] | tuple[float | int], p3_vec: list[float | int] | tuple[float | int], height=0.5: float | int) -> None
```

|       Property        |                 Description                 |               Accepted values                |
| :-------------------: | :-----------------------------------------: | :------------------------------------------: |
|         `x1`          |         X - component of 1st point          |               _**any number**_               |
|         `y1`          |         Y - component of 1st point          |               _**any number**_               |
|         `z1`          |         Z - component of 1st point          |               _**any number**_               |
|         `x2`          |         X - component of 2nd point          |               _**any number**_               |
|         `y2`          |         Y - component of 2nd point          |               _**any number**_               |
|         `z2`          |         Z - component of 2nd point          |               _**any number**_               |
|         `x3`          |         X - component of 3rd point          |               _**any number**_               |
|         `y3`          |         Y - component of 3rd point          |               _**any number**_               |
|         `z3`          |         Z - component of 3rd point          |               _**any number**_               |
|                       |                                             |                                              |
|       `p1_vec`        | Structure with x, y, z values for 1st point | _**tuple or list of numbers with length 3**_ |
|       `p1_vec`        | Structure with x, y, z values for 2nd point | _**tuple or list of numbers with length 3**_ |
|       `p1_vec`        | Structure with x, y, z values for 3rd point | _**tuple or list of numbers with length 3**_ |
|                       |                                             |                                              |
| `height` _(optional)_ |   Height/depth of triangle. Default: 0.5    |         _**none**_/_**any number**_          |

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer

drawer = CubeDrawer.get_obj()
drawer.draw_immediate = True

while True:
    drawer.clear()

    drawer.set_color(34, 108, 224)
    drawer.poly(0, 0, 0, 6, 0, 0, 0, 6, 0)

    drawer.set_color(0.514, 0.129, 0.380)
    drawer.poly(0, 0, 15, 15, 0, 15, 15, 15, 15)

    drawer.set_color(241, 228, 232)
    drawer.poly(0, 15, 15, 0, 15, 0, 15, 15, 0)

    drawer.set_color(0.992, 0.906, 0.298)
    drawer.poly(15, 15, 14, 15, 15, 1, 0, 0, 7)

    drawer.set_color(155, 197, 61)
    drawer.poly(13, 8, 3, 13, 8, 13, 13, 0, 8, 1.5)
```

<script>
  let _ = () => {
    (() => {
      document["ind_line_map"] = new Object();
      document.ind_line_map[0] = 6;
      document.ind_line_map[1] = 8;
      document.ind_line_map[2] = 9;
      document.ind_line_map[3] = 11;
      document.ind_line_map[4] = 12;
      document.ind_line_map[5] = 14;
      document.ind_line_map[6] = 15;
      document.ind_line_map[7] = 17;
      document.ind_line_map[8] = 18;
      document.ind_line_map[9] = 20;
      document.ind_line_map[10] = 21;
      document.ind_line_map[11] = 6;

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

<iframe src="http://cube.trycubic.com/examples/poly/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
