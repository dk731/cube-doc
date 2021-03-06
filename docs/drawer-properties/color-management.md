---
sidebar_position: 0
---

# Color Management

## Setting Brush Color

For color management library is using one global variable called `brush` that stores **r**, **g**, **b** (each is in range [0, 255]). You cannot access this variable straight (_because of the implementation of some core functionality of library_). That's why you should use the _getter_ and _setter_ function to set and get the current brush value:

```python title="Simplified definition"
def set_color(r, g, b)
def set_color(rgb)
def set_color(color_vec)

def get_color()
```

```python title="Complete definition"
def set_color(r: float, g: float, b: float) -> None
def set_color(r: int, g: int, b: int) -> None

def set_color(rgb: float) -> None
def set_color(rgb: int) -> None

def set_color(color_vec: list[float] | tuple[float]) -> None
def set_color(color_vec: list[int] | tuple[int]) -> None

def get_color() -> tuple[int]
```

|  Property   |                     Description                     |               Accepted values                |
| :---------: | :-------------------------------------------------: | :------------------------------------------: |
|     `r`     |                Red channel component                |        **[0, 255]** or **[0.0, 1.0]**        |
|     `g`     |               Green channel component               |        **[0, 255]** or **[0.0, 1.0]**        |
|     `b`     |               Blue channel component                |        **[0, 255]** or **[0.0, 1.0]**        |
|    `rgb`    |          One value for all color channels           |        **[0, 255]** or **[0.0, 1.0]**        |
|             |                                                     |                                              |
| `color_vec` | Structure with Red, Green, and Blue channels values | _**tuple or list of numbers with length 3**_ |

## Setting brightness

We made one more addition to colors to make life easier with real hardware. As a cube is built of _SK6812_ LEDs, with avg power consumption at full brightness per led: **~0.1345 W** and sum consumption of cube (_4096 leds_) at **~551 W** what equals **~110 A** at **5V** what is just above PSU's maximum **100 A**. That's why brush has one more additional property: `brightness` with a default value of **0.5**, which can be accessed with the following setter:

```python
def set_brightness(v: float) -> None
def set_brightness(v: int) -> None
```

| Property |   Description    |        Accepted values         |
| :------: | :--------------: | :----------------------------: |
|   `v`    | Brightness value | **[0, 255]** or **[0.0, 1.0]** |

## Clearing Display

The clearing display is a straightforward, fast, reliable way to eliminate any color or fill the whole array with a given color.

```python title="Simplified definition"
def clear(r, g, b)
def clear(rgb=0.0)
def clear(color_vec)
```

```python title="Complete definition"
def clear(rgb=0.0: float | int) -> None
def clear(r: float | int, g: float | int, b: float | int) -> None
def clear(color_vec: list[float | int] | tuple[float | int]) -> None
```

|  Property   |                     Description                     |               Accepted values                |
| :---------: | :-------------------------------------------------: | :------------------------------------------: |
|     `r`     |                Red channel component                |        **[0, 255]** or **[0.0, 1.0]**        |
|     `g`     |               Green channel component               |        **[0, 255]** or **[0.0, 1.0]**        |
|     `b`     |               Blue channel component                |        **[0, 255]** or **[0.0, 1.0]**        |
|    `rgb`    |          One value for all color channels           |        **[0, 255]** or **[0.0, 1.0]**        |
|             |                                                     |                                              |
| `color_vec` | Structure with Red, Green, and Blue channels values | _**tuple or list of numbers with length 3**_ |

:::caution CAUTION
All function related to color such as: `set_color(...)`, `set_brightness(...)` or `clear(...)` depends on what input data is, in case of at least on input value is `float` type, function will except values in range **[0.0, 1.0]** and if all values are `int` then excpected value range is **[0, 255]**.

`get_color()` return values is always same type - tuple with 3 values representing r, g, b chanels where each value is in range **[0, 255]**
:::

# Examples

You can easily find usage of setters and getters mentioned on this page in any drawing [primitive examples](../drawing-primitives/content).
