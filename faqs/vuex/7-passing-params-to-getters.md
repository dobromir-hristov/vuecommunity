---
question: How can I pass parameters to getters?
category: Vuex
useful-links:
  Official Resources:
    - href: https://vuex.vuejs.org/guide/getters.html#method-style-access
      text: Method-Style Access
  Tutorials:
    - href: https://codeburst.io/vuex-getters-are-great-but-dont-overuse-them-9c946689b414
      text: Vuex getters are great, but don’t overuse them
---

To pass a parameter to a getter, return a function from within the getter. The function can accept any number of parameters. Keep in mind data is not cached, so the function will run every time you call it.
