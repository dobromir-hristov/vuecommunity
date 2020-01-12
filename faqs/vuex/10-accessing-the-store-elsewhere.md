---
question: How do I access the Vuex store outside of Vue components, or in hooks without access to the instance?
category: Vuex
links:
  Stack Overflow Answers:
    - href: https://stackoverflow.com/questions/42603909/accessing-vuex-state-when-defining-vue-router-routes
      text: Accessing Vuex state when defining Vue-Router routes
order: 10
---

If you use the Vue CLI and ES modules, which you should, you can just import the exported Vuex instance (usually inside `src/store/index.js`) and access the whole store from there.
