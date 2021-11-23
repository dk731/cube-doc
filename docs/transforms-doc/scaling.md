---
sidebar_position: 2
---

# Scaling

Scales whole space, affects everything except: _**point** - size, any width of primitive(**line width**, **circle line width** or **sphere line width**), and thikness of 2D objecs (**circl**, **ellipsoid**)_.

:::caution CAUTION
Be aware that when you use the scaling function, primitive shapes are changing and their coordinates.
:::

## Definition:

```python title="Simplified definition"
def scale(x, y, z)
def scale(vec)
```

```python title="Complete definition"
def scale(x: float | int, y: float | int, z: float | int) -> None
def scale(vec: list[float | int] | tuple[float | int]) -> None
```

| Property |                  Description                  |               Accepted values                |
| :------: | :-------------------------------------------: | :------------------------------------------: |
|   `x`    |         X - component of scale vector         |               _**any number**_               |
|   `y`    |         Y - component of scale vector         |               _**any number**_               |
|   `z`    |         Z - component of scale vector         |               _**any number**_               |
|          |                                               |                                              |
| `p_vec`  | structure with x, y, z values of scale vector | _**tuple or list of numbers with length 3**_ |

:::caution CAUTION
When using scaling function, never use **0** as a scaling factor. This will lead to unexcepted output, instead use **1**!
:::

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer as cd
drawer = cd.get_obj()
drawer.set_immediate(True)

while True:
    drawer.clear()

    drawer.translate(7.5, 7.5, 7.5)

    drawer.set_color(1.000, 0.721, 0.819)
    drawer.filled_sphere(0, 0, 0, 2.5)

    drawer.scale(1.5, 1, 1)

    drawer.set_color(205, 246, 159)
    drawer.sphere((0, 0, 0), 3.5, 1)

    drawer.pop_matrix()  # Clear translation and scaling

    drawer.translate(7, 7.5, 7.5)

    drawer.set_color(0.439, 0.839, 1.0)
    drawer.poly(-4, 5, -7, 4, 5, -7, 0, -3, -5, 2)

    drawer.scale(1, -1, -1)

    drawer.poly(-4, 5, -7, 4, 5, -7, 0, -3, -5, 2)

    drawer.pop_matrix()
```

<script>
  let _ = () => {
    (() => {
    document["ind_line_map"] = new Object();

    document.ind_line_map["clear"] = 5;
    document.ind_line_map["trans1"] = 7;
    document.ind_line_map["setc1"] = 9;
    document.ind_line_map["sphere1"] = 10;
    document.ind_line_map["scale1"] = 12;
    document.ind_line_map["setc2"] = 14;
    document.ind_line_map["sphere2"] = 15;
    document.ind_line_map["pop1"] = 17;
    document.ind_line_map["trans2"] = 19;
    document.ind_line_map["setc3"] = 21;
    document.ind_line_map["triangle1"] = 22;
    document.ind_line_map["scale2"] = 24;
    document.ind_line_map["triangle2"] = 26;
    document.ind_line_map["pop2"] = 28;


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

<iframe src="https://cube.trycubic.com/examples/scale/index.html" width="80%" height="400" id="translation_example" load="translations_on_load()">
  <p>Your browser does not support iframes.</p>
</iframe>
