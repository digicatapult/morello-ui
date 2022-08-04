import React from 'react'

const A = () => <h1>hello and buye </h1>

export const scenarios = [
  {
    path: 'demo1',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: (props) => <A  {...props} /> 
  },
  {
    path: 'demo2',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo2 content</div> // main element
  },
  {
    path: '/demo/3',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo3 content</div> // main element
  },
  {
    path: 'demo4',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo4 content</div> // main element
  },
  {
    path: 'demo5',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo5 content</div> // main element
  },
  {
    path: 'demo6',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo6 content</div> // main element
  },
  {
    path: 'demo7',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo7 content</div> // main element
  },
  {
    path: 'demo8',
    title: '__title_placeholder',
    description: '__description_placeholder',
    assets: [ /* this could contain icons, other react comps, images and etc if needfefd */ ],
    other: {},  
    fn1: () => {},
    fn2: () => {},
    Element: () => <div>somee demo8 content</div> // main element
  },
]
