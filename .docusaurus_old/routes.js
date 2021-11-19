
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','9d7'),
  exact: true,
},
{
  path: '/blog/first-blog-post',
  component: ComponentCreator('/blog/first-blog-post','f12'),
  exact: true,
},
{
  path: '/blog/long-blog-post',
  component: ComponentCreator('/blog/long-blog-post','5b3'),
  exact: true,
},
{
  path: '/blog/mdx-blog-post',
  component: ComponentCreator('/blog/mdx-blog-post','2cc'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','0f8'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','5ac'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','70f'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','78d'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','891'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','546'),
  exact: true,
},
{
  path: '/drawer-properties/color-management',
  component: ComponentCreator('/drawer-properties/color-management','9bf'),
  exact: true,
},
{
  path: '/drawer-properties/cube-drawing-space',
  component: ComponentCreator('/drawer-properties/cube-drawing-space','210'),
  exact: true,
},
{
  path: '/drawer-properties/driver-settings',
  component: ComponentCreator('/drawer-properties/driver-settings','1e2'),
  exact: true,
},
{
  path: '/drawing-primitives/circle-primitive',
  component: ComponentCreator('/drawing-primitives/circle-primitive','133'),
  exact: true,
},
{
  path: '/drawing-primitives/content',
  component: ComponentCreator('/drawing-primitives/content','8ab'),
  exact: true,
},
{
  path: '/drawing-primitives/line-primitive',
  component: ComponentCreator('/drawing-primitives/line-primitive','53a'),
  exact: true,
},
{
  path: '/drawing-primitives/point-primitive',
  component: ComponentCreator('/drawing-primitives/point-primitive','454'),
  exact: true,
},
{
  path: '/drawing-primitives/poly-primitive',
  component: ComponentCreator('/drawing-primitives/poly-primitive','38b'),
  exact: true,
},
{
  path: '/drawing-primitives/pyramid-primitive',
  component: ComponentCreator('/drawing-primitives/pyramid-primitive','47c'),
  exact: true,
},
{
  path: '/drawing-primitives/sphere-primitive',
  component: ComponentCreator('/drawing-primitives/sphere-primitive','c99'),
  exact: true,
},
{
  path: '/transforms-doc/content',
  component: ComponentCreator('/transforms-doc/content','b3f'),
  exact: true,
},
{
  path: '/transforms-doc/rotation',
  component: ComponentCreator('/transforms-doc/rotation','2d5'),
  exact: true,
},
{
  path: '/transforms-doc/scaling',
  component: ComponentCreator('/transforms-doc/scaling','3f9'),
  exact: true,
},
{
  path: '/transforms-doc/translations',
  component: ComponentCreator('/transforms-doc/translations','4ff'),
  exact: true,
},
{
  path: '/tutorial-basics/first_steps',
  component: ComponentCreator('/tutorial-basics/first_steps','945'),
  exact: true,
},
{
  path: '/tutorial-basics/setup',
  component: ComponentCreator('/tutorial-basics/setup','008'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
