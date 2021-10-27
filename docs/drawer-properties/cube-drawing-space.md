---
sidebar_position: 1
---

# Drawing Space

Cube's drawing coordinates exists in 3D space (X, Y, Z) with Y axis being inverted (As in any graphics that you would do on computer **Y start at the top and goes to the bottom**), without any transformation applied (Just when you initialized cube) world space is distributed from _**[0, 0, 0]**_ (one of the upper corners) to _**[15, 15, 15]**_ (opposite to upper bottom corner), where on each whole coordinate (**(0, 0, 0)**, **(1, 2, 3)**, **(7, 1, 2)**) led pixel is located.

For more interesting and easier drawing all cube primitive drawing function can accept interger values: `point(0, 0, 0)` -> _to draw precicly upper corner pixel_, but also float values: `point(3.21, 5.11, 6.3112)` -> _to draw pixel with location **(3, 5, 6)**_

But how this: `point(3.21, 5.11, 6.3112)` could result in something, if there is no led pixel wich is located at: **(3.21, 5.11, 6.3112)**, following behaviour is achived with idea is that each primitive such as **point** or **line** is actually not a mathematicaly perfect, underneath **point** primitive is a sphere with diametr of **0.5**, so all led pixel within area of that sphere will be affect by this drawing call.

For more intuitive demonstration of this idea, take a look at this example:

<iframe src="http://cube.grvcp.lv/examples/system/index.html">
  <p>Your browser does not support iframes.</p>
</iframe>

:::caution CAUTION

Be careful when drawing points or lines with default width's at border values: (**(2.1, 12.5, 1.6)**,**(7.12, 1.23, 6.64)**,**(13.5, 4.5, 7.5)**), sometimes such drawing calls will result in nothing due to fact that none of pixel points are inside given primitives.

:::
