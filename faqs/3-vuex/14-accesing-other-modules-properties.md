---
question: How can a namespaced module access properties on a global one and vice versa?
category: Vuex
links:
  Official Resources:
    - href: https://vuex.vuejs.org/guide/modules.html#accessing-global-assets-in-namespaced-modules
      text: Accessing Global Assets in Namespaced Modules
---

You can use the `rootState` and `rootGetters` parameters in getters to access global, none-namespaced data. Actions have a rootGetters also these two helpers inside its `context` parameter.
