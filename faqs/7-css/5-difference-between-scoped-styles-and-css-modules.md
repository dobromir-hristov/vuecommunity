---
question: What is the difference between scoped styles and CSS modules?
category: Cascading Style Sheets
links:
  Articles:
    - href: https://www.netguru.com/codestories/vue.js-scoped-styles-vs-css-modules
      text: Vue.js - Scoped Styles vs CSS Modules
---

Scoped styles automatically change the css rules to match the auto generated data-attributes on each element that is being styled. This is done without any extra effort from the developer.

CSS Modules allow for, again, uniquely generated classes, that are accessible from within the Vue Template, via a special `$style` property. One major benefit of Modules is that you can export css variables to JavaScript.
