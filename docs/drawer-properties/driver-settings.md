---
sidebar_position: 3
---

# Additional Functions and Settings

Previous sections introduced to main library functionality, but there are some additional things without which it is imposible to properly create animation.

## Render and Show Frame

All animation programms will most likly contain 2 parts, _initialization_ and _endless loop_ where drawing will be handeled. When any primitive drawing call gets excecuted, be default they are placed in rendering stack, and are rendered all at once only when image is required to be displayed on the cube. To trigger display of current scene to the cube, `show()` function is used.

```python
def show() -> None
```

Sometimes it might be handy to change this default behaviour to style where everytime you excecuted primitive or clear call result will be displayed immediatly (without `show()` function) thats is when for `draw_immediate` varible that can be changed with:

```python
def set_immediate(v: bool) -> None
```

## Setting Drawing FPS

As in almost any graphical library yuo have ability to set framerate at which image will be refreshed, by using `set_fps()` setter funtion.

```python
def set_fps(fps_val: float | int) -> None
```

| Property  |      Description      | Accepted values  |
| :-------: | :-------------------: | :--------------: |
| `fps_val` | Max refreshrate value | _**any number**_ |

:::tip TIP
IF you want to disable FPS cap, just set it to pass **0** as `fps_val`.
:::

## Waiting for Virtual Cube

By default when using [cube emulator](http://cube.trycubic.com/) to see output, excecution of code will halt on `show()` function call until at least one virtual cube will be connected, but if program is required to render does

```python
def set_wait_cube(v: bool) -> None
```

If you want to check how many virtual cube's are currently connected, you can use:

```python
def get_virt_amount() -> int
```
