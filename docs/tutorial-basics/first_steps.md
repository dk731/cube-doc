---
sidebar_position: 2
---

# First steps

When everything is installed and is ready for work, first thing to do is import library

```python
from ledcd  import CubeDrawer
```

## Display initialization

:::caution Caution
As library supports only single display mode (_You cannot exctend it with another one_) so main class is static and usual pyton constructor is not reachable!
:::

Now to obtain real interface object we will have to call static function `get_obj()`, like so:

```python
drawer = CubeDrawer.get_obj()
```

If this code excecuted succesfully this means that display is initialized and is ready to be used!

## First Image

Now when display communication object was instansiated how do we see the output of our programm if we dont have a real 3D display?

Specialy for this situation was created 1:1 emulator that will act as real hardware but on your pc, all you need to do is open your webbrowser (_Preffered to use Chrome_) and open following [page](https://cube.trycubic.com/). _Page with simillar content should appear (Windows below is not functional example of what you should see in main window...):_

<iframe src="https://cube.trycubic.com/examples/clean/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>

:::tip CONTROLS
Press LMB and drag -> to rotate

Use you scroll to zoom-in and zoom-out
:::

## First Programm

Now when out [simulator page](https://cube.trycubic.com/) is oppened and library is installed, lets try to run out _Hello World!_ alternative of graphical world (_Hello Triangle!_):

```python
from ledcd import CubeDrawer
drawer = CubeDrawer.get_obj()

drawer.triangle((0, 15, 0,), (7.5, 0, 15), (15, 15, 0))
drawer.show()

input()
```
