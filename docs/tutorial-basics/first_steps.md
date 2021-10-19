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

## First Image

Now when display communication object was instansiated how do we see the output of our programm if we dont have a real 3D display?

Specialy for this situation was created 1:1 emulator that will act as real hardware but on your pc, all you need to do is open your webbrowser (_Preffered to use Chrome_) and open following [page](http://cube.grvcp.lv/). _Page with simillar content should appear (Windows below is not functional example of what you should see in main window...):_

<iframe src="http://127.0.0.1:5500/public/examples/clean/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>

:::tip CONTROLS
Press LMB and drag -> to rotate

Use you scroll to zoom-in and zoom-out
:::

## First Programm

Now when out [simulator page](http://cube.grvcp.lv/) is oppened and library is installed, lets try to run out _Hello World!_ alternative of graphical world (_Hello Triangle!_):

```python
from ledcd import CubeDrawer
drawer = CubeDrawer.get_obj()

drawer.triangle((0, 15, 0,), (7.5, 0, 15), (15, 15, 0))
drawer.show()

input()
```
