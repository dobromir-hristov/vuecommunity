---
question: What should I use for unit testing, Jest or Vue Test Utils?
category: Toolchain
links:
  Books:
    - href: https://www.manning.com/books/testing-vue-js-applications
      text: Testing Vue Applications
    - href: https://leanpub.com/testingvuejscomponentswithjest
      text: Testing Vue.js components with Jest
  Tutorials:
    - href: https://itnext.io/testing-real-world-vuejs-apps-d3e44118f8ce
      text: Testing real world VueJs apps
    - href: https://alligator.io/vuejs/testing-vue-with-jest/
      text: Testing Vue with Jest
order: 4
---

Jest is a testing framework, where as Vue Test Utils is a utility library (set of helpers). You use Vue Test Utils in tandem with some testing library, like Jest or Mocha.
It's purpose is to make testing Vue components easier, by abstracting away complex and repeatable test preparation code.
