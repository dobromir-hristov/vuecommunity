---
question: How do I use computed properties inside functional component?
category: Components
links:
  Tutorials:
    - href: https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0
      text: What’s the deal with functional components in Vue.js?
    - href: https://alligator.io/vuejs/functional-components/
      text: Functional Components in Vue.js
---

Short answer, you don't. 

Functional components generally use render functions or JSX, thus one could import or define simple functions on top of the `render` method, using them inside as data transformers, similar to computed properties. Even though not exactly computed properties, it can help you reduce template logic quite a lot. 

Check the links below for more info and examples.
