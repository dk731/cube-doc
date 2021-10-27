---
sidebar_position: 3
---

# Additional Functions and Settings

We have discussed main driver functionality, but there are some additional think you must know about.

## Render and Show Frame

All of programms that you will write will most likly be build from 2 parts, _initialization_ and _endless loop_ where drawing will be handeled. When you excecute any of the primitive drawing functions, be default they are placed in stack, and are rendered all at once only when image is required to be displayed on cube. To trigger display of current scene to the cube, `show()` function is used.

```python title="Simplified definition"
def show()
```

```python title="Complete definition"
def show() -> None
```

Sometimes it might be handy to change this default behaviour to style where everytime you excecuted primitive or clear call result will be displayed immediate (without `show()` function) thats is when for `draw_immediate` varible that can be changed with:

```python
def set_immediate(v: bool) -> None
```

## Setting Drawing FPS

As in almost any graphical library yuo have ability to set framerate at which image will be refreshed, by using `set_fps()` setter funtion.

```python title="Simplified definition"
def set_fps(fps_val)
```

```python title="Complete definition"
def set_fps(fps_val: float | int) -> None
```

| Property  |      Description      | Accepted values  |
| :-------: | :-------------------: | :--------------: |
| `fps_val` | Max refreshrate value | _**any number**_ |

:::tip TIP
IF you want to disable FPS cap, just set it to pass **0** as `fps_val`.
:::

## Waiting for Virtual Cube

By default when using [cube emulator](http://cube.grvcp.lv/) to see output, excecution of code will halt on `show()` function call until at least one virtual cube will be connected, but if you dont disable such behavior `wait_cube` variable exists and can be accesed with:

```python
def set_wait_cube(v: bool) -> None
```

If you want to check how many virtual cube's are currently connected, you can use:

```python
def get_virt_amount() -> int
```
