---
sidebar_position: 4
---

# Sphere

Filles space between 2 points with some offset(line width).

## Definition:

```python title="Simplified definition"
# Spheres
def sphere(x, y, z, r, line_width=0.5)
def sphere(p_vec, r, line_width=0.5)

def filled_sphere(x, y, z, r)
def filled_sphere(p_vec, r)


# Ellipsoids
def sphere(x, y, z, rx, ry, rz, line_width=0.5);
def sphere(p_vec, r_vec, line_width=0.5);

def filled_sphere(x, y, z, rx, ry, rz);
def filled_sphere(p_vec, r_vec);
```

```python title="Complete definition"
# Spheres
def sphere(x: float | int, y: float | int, z: float | int, r: float | int, line_width=0.5: float | int) -> None
def sphere(p_vec: list[float | int] | tuple[float | int], r: float | int, line_width=0.5: float | int) -> None

def filled_sphere(x: float | int, y: float | int, z: float | int, r: float | int) -> None
def filled_sphere(p_vec: list[float | int] | tuple[float | int], r: float | int) -> None


# Ellipsoids
def sphere(x: float | int, y: float | int, z: float | int, rx: float | int, ry: float | int, rz: float | int, line_width=0.5: float | int) -> None
def sphere(p_vec: list[float | int] | tuple[float | int], r_vec: list[float | int] | tuple[float | int], line_width=0.5: float | int) -> None

def filled_sphere(x: float | int, y: float | int, z: float | int, rx: float | int, ry: float | int, rz: float | int) -> None
def filled_sphere(p_vec: list[float | int] | tuple[float | int], r_vec: list[float | int] | tuple[float | int]) -> None
```

|          Property           |                     Description                      |               Accepted values                |
| :-------------------------: | :--------------------------------------------------: | :------------------------------------------: |
|            **x**            |        X - component of sphere's center point        |               _**any number**_               |
|            **y**            |        Y - component of sphere's center point        |               _**any number**_               |
|            **z**            |        Z - component of sphere's center point        |               _**any number**_               |
|            **r**            |                 Radius of the sphere                 |               _**any number**_               |
|                             |                                                      |                                              |
|           **rx**            |               X - radius of ellipsoid                |               _**any number**_               |
|           **ry**            |               Y - radius of ellipsoid                |               _**any number**_               |
|           **rz**            |               Z - radius of ellipsoid                |               _**any number**_               |
|                             |                                                      |                                              |
|          **p_vec**          | Structure with x, y, z values sphere's center point  | _**tuple or list of numbers with length 3**_ |
|          **r_vec**          | Structure with x, y, z values for ellipsoid radiuses | _**tuple or list of numbers with length 3**_ |
|                             |                                                      |                                              |
| **line_width** _(optional)_ |       Width of the sphere's wall. Default: 0.5       |         _**none**_/_**any number**_          |

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer

drawer = CubeDrawer.get_obj()
drawer.draw_immediate = True

while True:
    drawer.clear()

    drawer.set_color(129, 240, 229)
    a.filled_sphere(4, 4, 12, 3.5)

    drawer.set_color(0.588, 0.008, 0.0)
    a.sphere(11, 11, 4, 4, 0.5)  # Spehre

    drawer.set_color(247, 236, 89)
    a.sphere(7.5, 3, 4, 7, 3, 3, 0.2)

    drawer.set_color(1.0, 0.533, 0.863)
    a.filled_sphere(7.5, 12, 12, 7, 3, 3)
```

<script>
  let _ = () => {
    (() => {
      document["cur_state"] = -1;

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

<iframe src="http://127.0.0.1:5500/public/examples/sphere/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
