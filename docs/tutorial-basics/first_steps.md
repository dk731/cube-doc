---
sidebar_position: 2
---

# First steps

When everything is installed and is ready for work, the first thing to do is import the library.

```python
from ledcd  import CubeDrawer
```

## Display initialization

:::caution Caution
As the library supports only a single display mode (_You cannot extend it with another one_), the main class is static, and the usual python constructor is not reachable!
:::

Now to obtain a real interface object, we will have to call static function `get_obj()`, like so:

```python
drawer = CubeDrawer.get_obj()
```

If this code has been executed successfully, the display is initialized and ready to be used!

## First Image

Now when the display communication object is instantiated, how do we see the output of our program if we don't have an actual 3D display?

Specially for this situation was created 1:1 emulator that will act as real hardware but on your pc, all you need to do is open your web browser (_Preffered to use Chrome_) and open [emulator page](https://sim.cube.qwe.me/). _Page with similar content should appear (Windows below is not a functional example of what you should see in the main window):_

:::caution
For communication between _python script_ and _web emulator_ - TCP is used. The python script creates a listener server on **localhost:12035** and an emulator trying to connect to it.
:::

<iframe src="https://sim.cube.qwe.me/examples/clean/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>

:::tip CONTROLS
Press LMB and drag -> to rotate

Use your scroll to zoom-in and zoom-out
:::

## First Programm

Now when out [simulator page](https://sim.cube.qwe.me/) is opened, and the library is installed, let's try to run out _Hello World!_ alternative of the graphical world (_Hello Triangle!_):

```python
from ledcd import CubeDrawer
drawer = CubeDrawer.get_obj()

drawer.poly((0, 15, 0,), (7.5, 0, 15), (15, 15, 0))
drawer.show()

input()
```

<iframe src="https://sim.cube.qwe.me/examples/first/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>
