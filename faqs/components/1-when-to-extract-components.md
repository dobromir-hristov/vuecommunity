---
question: When should I extract components into subcomponents?
category: Components
links:
  Articles:
    - href: https://markus.oberlehner.net/blog/how-the-bem-css-naming-scheme-can-improve-vue-component-architecture/
      text: How the BEM CSS Naming Scheme Can Improve Vue.js Component Architecture
---

There is no golden rule, however there are some rough guidelines:

* when a component begins to do too many things at once - fetch async data, loop list items, render dropdowns, listen to global window events, etc.
* when you need a computed property with a parameter - this is a common giveaway. If you extract a component, the param might be a prop now.
* when a component is too big and complex - if you have a whole page rendered, it is advisable to split out the semantic components (navigation, list, sidebar).
