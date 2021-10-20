---
sidebar_position: 0
---

# Color Management

As you have probably seen drawing primitive definition you could not din there any argument that would set color of drawing object, so how we can draw colored image? Answer is very simple, library is using one global vraible called `brush` that stores **r**, **g**, **b** (each is in range [0, 255]). You cant acces this variable straight (_because of implementation of some core functionality of library_), thats why you should use _getter_ and _setter_ function to set and get current brush value:

```python title="Simplified definition"
def set_color(r, g, b)

def get_color()
```

```python title="Complete definition"
def set_color(r: float, g: float, b: float) -> None
def set_color(r: int, g: int, b: int) -> None

def get_color() -> tuple[int]
```

:::caution CAUTION
`set_color(r, g, b)` function call depends on what input data is, in case you pass `float` numbers, function will except values in range **[0.0, 1.0]**, where 0.0 - completle dim and 1.0 - maximum brightness. And in case input values are `int` then excpected value range is **[0, 255]**.

`get_color()` return values is always same type - tuple with 3 values representing r, g, b chanels where each value is in range **[0, 255]**
:::

One more addition to colors was made to make life easier with real hardware. As cube is build of _SK6812_ leds, with avg power consumption at full brightness per led: **~0.1345 W** and sum conspumtion of cube (_4096 leds_) at **~551 W** what equals **~110 A** at **5V** what is just above PSU's maximum **100 A**. Thats why brush have one more adidtional propery: `brightness` that is in range **[0.0, 1.0]** and with default value of **0.5**. But you anyway have ability to set this value by calling appropriate setter:

```python
def set_brightness(v: float) -> None
```

# Examples

You can easily find usage of setters and getters that were mentioned on this page in any drawing [primitive examples](../drawing-primitives/content) or in the [examples directory](../examples-dir/content).
