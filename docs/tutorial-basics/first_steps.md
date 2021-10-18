---
sidebar_position: 2
---

# First steps

Now everything is installed so lets try to import `#LIBRARY_NAME` our main class that we will use to communicate with display, this can be achived with following line:

```python {#custom-id}
from LIBRARY_NAME import CLASS_NAME

for i in range(123):
  123
```

## Display initialization

:::caution Caution
As library supports only single display mode (_You cannot exctend it with another one_) so main class is static and usual pyton constructor is not reachable!
:::

Now to obtain real interface object we will have to call static function `get_obj()`, like so:

```python
drawer = CLASS_NAME.get_obj()
```

If this code excecuted succesfully this means that display is initialized and is ready to be used!

:::tip Tip
After display initaliztion you have apportuiny to set additional settion used by display such as: set framerate using `set_fps_cap(fps: int | float)`, set brightness using `set_brightness(brgh: int | float)` but more about that later.
:::

## First image

Now when display communication object was instansiated how do we see the output of our programm if we dont have a real 3D display?

Specialy for this situation was created 1:1 emulator that will act as real hardware but on your pc, all you need to do is open your webbrowser (_Preffered to use Chrome_) and open following [page](http://cube.grvcp.lv/).

<div id="code_block_hidden" hidden></div>

```python
from ledcd import CubeDrawer as cd
obj = cd.get_obj()
obj.draw_immediate = True

while True:
    obj.clear()

    obj.push_matrix()

    obj.point(0, 0, 0)
    obj.translate(6, 0, 0)
    obj.point(0, 0, 0)
    obj.translate(2, 9, 5)
    obj.point(0, 0, 0)

    obj.pop_matrix()

```

<script>
  let translations_on_load = () => {
    (() => {
      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      document["cur_state"] = -1;

      document["ind_line_map"] = new Object();
      document.ind_line_map[-1] = null;
      document.ind_line_map[0] = 5;
      document.ind_line_map[1] = 9;
      document.ind_line_map[2] = 10;
      document.ind_line_map[3] = 11;
      document.ind_line_map[4] = 12;
      document.ind_line_map[5] = 13;

      document.ind_line_map[6] = 15;

      eventer(eventMethod == "attachEvent" ? "onmessage" : "message", function (e) {
          if (e.data == document.cur_state || e.data < 0)
            return;
          
          const tmp = document.querySelectorAll("#code_block_hidden ~ div code > *")[document.ind_line_map[document.cur_state]];
          if (tmp)
            if (tmp.classList.contains("active_code_line"))
              tmp.classList.remove("active_code_line")

          document.cur_state = e.data;
          document.querySelectorAll("#code_block_hidden ~ div code > *")[document.ind_line_map[document.cur_state]].classList.add("active_code_line")
          
      }, false);


    })()
  }
</script>

<iframe src="http://127.0.0.1:5500/public/examples/translation/index.html" width="80%" height="400" id="translation_example" load="translations_on_load()">
  <p>Your browser does not support iframes.</p>
</iframe>
