---
sidebar_position: 2
---

# First steps

Now everything is installed so lets try to import `#LIBRARY_NAME` our main class that we will use to communicate with display, this can be achived with following line:

```python
from LIBRARY_NAME import CLASS_NAME
```

## Display initialization

:::caution Caution
As library supports only single display mode (_You cannot exctend it with another one_) so main class is static and usual pyton constructor is not reachable!
:::

Now to obtain real interface object we will have to call static function `get_obj()`, like so:

```
drawer = CLASS_NAME.get_obj()
```

If this code excecuted succesfully this means that display is initialized and is ready to be used!

:::tip Tip
After display initaliztion you have apportuiny to set additional settion used by display such as: set framerate using `set_fps_cap(fps: int | float)`, set brightness using `set_brightness(brgh: int | float)` but more about that later.
:::

## First image

Now when display communication object was instansiated how do we see the output of our programm if we dont have a real 3D display?

Specialy for this situation was created 1:1 emulator that will act as real hardware but on your pc, all you need to do is open your webbrowser (_Preffered to use Chrome_) and open following [page](http://cube.grvcp.lv/).

<iframe src="http://cube.grvcp.lv/" width="50%" height="300">
  <p>Your browser does not support iframes.</p>
</iframe>
