---
sidebar_position: 6
---

# Tetrahedron

Draws filled 3D tetrahedron.

## Definition:

```python title="Simplified definition"
def tetr(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
def tetr(p1_vec, p2_vec, p3_vec, p4_vec)
```

```python title="Complete definition"
def tetr(x1: float | int, y1: float | int, z1: float | int, x2: float | int, y2: float | int, z2: float | int, x3: float | int, y3: float | int, z3: float | int, x4: float | int, y4: float | int, z4: float | int) -> None
def tetr(p1_vec: list[float | int] | tuple[float | int], p2_vec: list[float | int] | tuple[float | int], p3_vec: list[float | int] | tuple[float | int], p4_vec: list[float | int] | tuple[float | int]) -> None
```

| Property |                      Description                       |               Accepted values                |
| :------: | :----------------------------------------------------: | :------------------------------------------: |
|   `x1`   |         X - component of 1st tetrahedron point         |               _**any number**_               |
|   `y1`   |         Y - component of 1st tetrahedron point         |               _**any number**_               |
|   `z1`   |         Z - component of 1st tetrahedron point         |               _**any number**_               |
|   `x2`   |         X - component of 2st tetrahedron point         |               _**any number**_               |
|   `y2`   |         Y - component of 2st tetrahedron point         |               _**any number**_               |
|   `z2`   |         Z - component of 2st tetrahedron point         |               _**any number**_               |
|   `x3`   |         X - component of 3st tetrahedron point         |               _**any number**_               |
|   `y3`   |         Y - component of 3st tetrahedron point         |               _**any number**_               |
|   `z3`   |         Z - component of 3st tetrahedron point         |               _**any number**_               |
|   `x4`   |         X - component of 4st tetrahedron point         |               _**any number**_               |
|   `y4`   |         Y - component of 4st tetrahedron point         |               _**any number**_               |
|   `z4`   |         Z - component of 4st tetrahedron point         |               _**any number**_               |
|          |                                                        |                                              |
| `p1_vec` | Structure with x, y, z values of 1st tetrahedron point | _**tuple or list of numbers with length 3**_ |
| `p2_vec` | Structure with x, y, z values of 2st tetrahedron point | _**tuple or list of numbers with length 3**_ |
| `p3_vec` | Structure with x, y, z values of 3st tetrahedron point | _**tuple or list of numbers with length 3**_ |
| `p4_vec` | Structure with x, y, z values of 4th tetrahedron point | _**tuple or list of numbers with length 3**_ |

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer

drawer = CubeDrawer.get_obj()
drawer.draw_immediate = True

while True:
    drawer.clear()

    drawer.set_color(129, 240, 229)
    drawer.tetr(0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 6, 0)

    drawer.set_color(0.588, 0.008, 0.0)
    drawer.tetr((5, 0, 5), (9, 0, 11), (12, 0, 5), (9, 6, 7))

    drawer.set_color(247, 236, 89)
    drawer.tetr([0, 15, 15], [15, 15, 15], [15, 15, 0], [15, 6, 15])

    drawer.set_color(1.0, 0.533, 0.863)
    drawer.tetr((0, 15, 0), (0, 15, 13), (13, 15, 0), (0, 11, 0))
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

<iframe src="https://cube.trycubic.com/examples/tetr/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
