---
question: When and why should I use global state management?
category: Vuex
links:
  Tutorials:
    - href: Should I Store This Data in Vuex?
      text: https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/
order: 1
---

Vuex can be used to share reactive data across distant components. This is very useful when you need to share the logged in user across multiple components, open modals from everywhere. You could also centralize all your data fetching logic into Vuex modules, keeping everything in one place, yet have it accessible everywhere.
