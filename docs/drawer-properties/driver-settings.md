---
sidebar_position: 3
---

# Additional Functions and Settings

Previous sections introduced to main library functionality, but there are some other things without which it is impossible to create animation properly.

## Render and Show Frame

All drawing functions such as: `point`, `circle`, or others are not rendering anything on the screen immediately, by default. To update your visual output, you should use a `show` function.

```python
def show() -> None
```

Sometimes it might be handy to change this default behavior to a style where you execute a primitive or clear call, and the result will be displayed immediately (without the `show` function). That's what for `draw_immediate` variable is used. You can change its state by with the following setter:

```python
def set_immediate(v: bool) -> None
```

## Setting Drawing FPS

As in almost any graphical library, you can set the preferred refresh rate:

```python
def set_fps(fps_val: float | int) -> None
```

| Property  |      Description      | Accepted values  |
| :-------: | :-------------------: | :--------------: |
| `fps_val` | Max refreshrate value | _**any number**_ |

:::tip TIP
IF you want to disable the FPS cap, just set it to pass **0** as `fps_val`.
:::

## Frames Delta Time

To produce smooth animations that will not depend on computer performance, you can use variables that can be accessed directly, which stores the period between recent `show` function calls.

```python
CubeDrawer.delta_time # Float data type, measured in seconds
```

## Waiting for Virtual Cube

By default, when using [cube emulator](https://cube.trycubic.com/) to see the output, code execution will halt on the `show` function call until at least one virtual cube is connected. Still, if the program is required to render even without visual output, you can use:

```python
def set_wait_cube(v: bool) -> None
```

If you want to check how many virtual cubes are currently connected, you can use:

```python
def get_virt_amount() -> int
```
