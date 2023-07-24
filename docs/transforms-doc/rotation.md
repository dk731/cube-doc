---
sidebar_position: 3
---

# Rotation

Rotate whole space by given [Euler angles](https://en.wikipedia.org/wiki/Euler_angles) vector.

:::caution CAUTION
Be aware that when you use the scaling function, not only are primitive shapes changing but also their coordinates.
:::

## Definition:

```python title="Simplified definition"
def rotate(x, y, z)
def rotate(vec)
```

```python title="Complete definition"
def rotate(x: float | int, y: float | int, z: float | int) -> None
def rotate(vec: list[float | int] | tuple[float | int]) -> None
```

| Property |                   Description                    |               Accepted values                |
| :------: | :----------------------------------------------: | :------------------------------------------: |
|   `x`    |         X - component of rotation vector         |               _**any number**_               |
|   `y`    |         Y - component of rotation vector         |               _**any number**_               |
|   `z`    |         Z - component of rotation vector         |               _**any number**_               |
|          |                                                  |                                              |
| `p_vec`  | structure with x, y, z values of rotation vector | _**tuple or list of numbers with length 3**_ |

:::caution CAUTION
Rotation is performed using [Euler angles](https://en.wikipedia.org/wiki/Euler_angles) and is measured in radians!
:::

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer as cd
from math import radians  # Degrees to radians function

drawer = cd.get_obj()
drawer.set_immediate(True)

while True:
    drawer.clear()

    drawer.point(5, 0, 0)

    drawer.rotate(radians(90), 0, 0)

    drawer.point(5, 0, 0)

    drawer.pop_matrix()
    drawer.translate(7, 7, 7)

    drawer.set_color(1.000, 0.721, 0.819)
    drawer.poly(-4, 6, -6, 4, 6, -6, 0, -3, -3, 2)

    drawer.rotate(0, radians(90), 0)

    drawer.poly(-4, 6, -6, 4, 6, -6, 0, -3, -3, 2)

    drawer.pop_matrix()
    drawer.translate(7, 7, 7)

    drawer.set_color(0.439, 0.839, 1.0)
    drawer.circle(0, 0, 6, 4, 2, 2)

    drawer.rotate(0, radians(90), 0)

    drawer.circle(0, 0, 6, 4, 2, 2)

    drawer.rotate(0, radians(45), 0)

    drawer.set_color(0.439, 0.839, 1.0)
    drawer.filled_circle(0, 0, 0, 4, 1.5)

    drawer.pop_matrix()
```

<script>
  let _ = () => {
    (() => {
    document["ind_line_map"] = new Object();

    document.ind_line_map["clear"] = 7;
    document.ind_line_map["point1"] = 9;
    document.ind_line_map["rot1"] = 11;
    document.ind_line_map["point2"] = 13;
    document.ind_line_map["pop1"] = 15;
    document.ind_line_map["trans1"] = 16;
    document.ind_line_map["col1"] = 18;
    document.ind_line_map["poly1"] = 19;
    document.ind_line_map["rot2"] = 21;
    document.ind_line_map["poly2"] = 23;
    document.ind_line_map["pop2"] = 25;
    document.ind_line_map["trans2"] = 26;
    document.ind_line_map["col2"] = 28;
    document.ind_line_map["circ1"] = 29;
    document.ind_line_map["rot3"] = 31;
    document.ind_line_map["circ2"] = 33;
    document.ind_line_map["rot4"] = 35;
    document.ind_line_map["col3"] = 37;
    document.ind_line_map["circ3"] = 38;
    document.ind_line_map["pop3"] = 40;


    window.addEventListener("message", function (e) {
        
        if (e.data == document.cur_state || e.data == null)
            return;
        
        const tmp = document.querySelectorAll("#code_block_hidden ~ div .token-line")[document.ind_line_map[document.cur_state]];
        if (tmp)
        if (tmp.classList.contains("active_code_line"))
            tmp.classList.remove("active_code_line")

        document.cur_state = e.data;
        const tmp1 = document.querySelectorAll("#code_block_hidden ~ div .token-line")[document.ind_line_map[document.cur_state]];
        if (tmp1)
        tmp1.classList.add("active_code_line")
        
    }, false); })()
  }
</script>

<iframe src="https://sim.cube.qwe.me/examples/rotation/index.html" width="80%" height="400" id="translation_example" load="translations_on_load()">
  <p>Your browser does not support iframes.</p>
</iframe>
