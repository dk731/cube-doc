---
sidebar_position: 1
---

# Point

As being most simplest among all primitives is also fastes and usualy most used. As any primitive in this library point color is equal to current brush color ([More about colors here](../drawer-properties/color-management)).

## Definition:

```python title="Simplified definition"
def point(x, y, z)
def point(p_vec)
```

```python title="Complete definition"
def point(x: float | int, y: float | int, z: float | int) -> None
def point(p_vec: list[float | int] | tuple[float | int]) -> None
```

| Property |          Description          |               Accepted values                |
| :------: | :---------------------------: | :------------------------------------------: |
|   `x`    |    X - component of point     |               _**any number**_               |
|   `y`    |    Y - component of point     |               _**any number**_               |
|   `z`    |    Z - component of point     |               _**any number**_               |
|          |                               |                                              |
| `p_vec`  | structure with x, y, z values | _**tuple or list of numbers with length 3**_ |

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer
from random import random, randint
from time import sleep

drawer = CubeDrawer.get_obj()
drawer.draw_immediate = True

while True:
    drawer.set_color(random(), random(), random()) # set radnom brush colro
    drawer.point(randint(0, 15), randint(0, 15), randint(0, 15)) # draw point at radom location [0-15]

    sleep(1)
```

<script>
  let _ = () => {
    (() => {
      document["ind_line_map"] = new Object();
      document.ind_line_map[-1] = null;
      document.ind_line_map[0] = 8;
      document.ind_line_map[1] = 9;
      document.ind_line_map[2] = 11;

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

<iframe src="http://cube.trycubic.com/examples/point/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
