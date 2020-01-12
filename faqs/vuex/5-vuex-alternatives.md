---
question: Are there alternative solutions to using Vuex?
category: Vuex
links:
  Tutorials:
    - href: https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/
      text: Should I Store This Data in Vuex?
    - href: http://vuetips.com/simple-state-management-vue-stash
      text: Simple state management, simpler than Vuex
order: 5
---

You could use the `$root` object for very small applications. You could also try the provide/inject api for tightly coupled components, which does have some caveats though. One could also try using Redux.
