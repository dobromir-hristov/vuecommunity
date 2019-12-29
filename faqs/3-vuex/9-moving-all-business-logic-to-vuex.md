---
question: Should I move all my business logic to Vuex?
category: Vuex
---

You are not required to, as this will substantially increase the amount of boilerplate you need to write. This could however make components lighter and easier to refactor, with most of the heavy lifting moved to Vuex, plus more components can perform these actions. 

This makes however Vuex modules bulky and harder to navigate. Namespaced modules are a must on such cases to reduce name collisions.
