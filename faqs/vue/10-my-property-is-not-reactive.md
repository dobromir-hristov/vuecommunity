---
question: Why isn't my property reactive?
category: General Vue
useful-links:
  Official Resources:
    - href: https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      text: Change Detection Caveat
  Useful Links:
    - href: https://vuejsdevelopers.com/2017/03/05/vue-js-reactivity/
      text: Reactivity In Vue.js (And Its Pitfalls
---

In Vue 2.x and below, for a property to be reactive, it needs to be predefined in the `data` definition. If you cannot do that for some reason, you need to use the `$set` helper to set that property and make it reactive. When pushing new properties to a nested object, you must either replace the whole object, or again use `$set` to set just the new property.

In Vue 3.x, this is mostly taken care of and should not happen.
