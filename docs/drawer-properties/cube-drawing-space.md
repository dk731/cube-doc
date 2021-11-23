---
sidebar_position: 1
---

# Drawing Space

Cube's drawing coordinates exist in 3D space (X, Y, Z) with the Y-axis being inverted (As in any graphics that you would do on a computer **Y start at the top and goes to the bottom**). Without any transformation, applied (Just when you initialized cube) world space is distributed from _**[0, 0, 0]**_ (one of the upper corners) to _**[15, 15, 15]**_ (opposite to upper bottom corner), where on each absolute coordinate (**(0, 0, 0)**, **(1, 2, 3)**, **(7, 1, 2)**) led pixel is located.

For more interesting and easier drawing all cube primitive drawing function can accept interger values: `point(0, 0, 0)` -> _to draw precicly upper corner pixel_, but also float values: `point(3.21, 5.11, 6.3112)` -> _to draw pixel with location **(3, 5, 6)**_

But how this: `point(3.21, 5.11, 6.3112)` could result in something, if there is no led pixel which is located at: **(3.21, 5.11, 6.3112)**. Following behavior is achieved with the idea is that each primitive such as **point** or **line** is not mathematically perfect, underneath **point** primitive is a sphere with a diameter of **0.5**, so all led pixel within an area of that sphere will be affected by this drawing call.

:::tip TIP
If you wish to use non-flipped Y version of coordinate system, you always can scale **Y** axis by **-1** with following scale call: `scale(1, -1, 1)` (More about transformation in [Transformations](../transforms-doc/content) section)
:::

For a more intuitive demonstration of this idea, take a look at this example:

<iframe src="https://cube.trycubic.com/examples/system/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>

:::caution CAUTION

Be careful when drawing points or lines with default width's at border values: (**(2.1, 12.5, 1.6)**,**(7.12, 1.23, 6.64)**,**(13.5, 4.5, 7.5)**), sometimes such drawing calls will result in nothing since none of the pixel points are inside given primitives.

:::
