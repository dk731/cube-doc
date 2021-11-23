---
sidebar_position: 1
---

# Translation

Translates origin by given values, most basic transformation action, they are usually used whenever you need to offset object or rotate around a specific point.

## Definition:

```python title="Simplified definition"
def translate(x, y, z)
def translate(vec)
```

```python title="Complete definition"
def translate(x: float | int, y: float | int, z: float | int) -> None
def translate(vec: list[float | int] | tuple[float | int]) -> None
```

| Property |                  Description                   |               Accepted values                |
| :------: | :--------------------------------------------: | :------------------------------------------: |
|   `x`    |         X - component of offset vector         |               _**any number**_               |
|   `y`    |         Y - component of offset vector         |               _**any number**_               |
|   `z`    |         Z - component of offset vector         |               _**any number**_               |
|          |                                                |                                              |
| `p_vec`  | structure with x, y, z values of offset vector | _**tuple or list of numbers with length 3**_ |

## Example:

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer as cd
drawer = cd.get_obj()
drawer.set_immediate(True)

while True:
    drawer.clear()

    drawer.push_matrix()

    drawer.point(0, 0, 0)
    drawer.translate(6, 0, 0)
    drawer.point(0, 0, 0)
    drawer.translate(2, 9, 5)
    drawer.point(0, 0, 0)

    drawer.pop_matrix()
```

<script>
  let translations_on_load = () => {
    (() => {
      document["ind_line_map"] = new Object();
      document.ind_line_map[0] = 5;
      document.ind_line_map[1] = 9;
      document.ind_line_map[2] = 10;
      document.ind_line_map[3] = 11;
      document.ind_line_map[4] = 12;
      document.ind_line_map[5] = 13;

      document.ind_line_map[6] = 15;

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

<iframe src="https://cube.trycubic.com/examples/translation/index.html" width="80%" height="400" id="translation_example" load="translations_on_load()">
  <p>Your browser does not support iframes.</p>
</iframe>
