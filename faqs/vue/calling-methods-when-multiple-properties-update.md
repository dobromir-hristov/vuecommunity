---
question: How can I call a method when more than one property on the instance updates?
category: General Vue
links:
  Github Issues:
    - href: https://github.com/vuejs/vue/issues/844
      text: '#844 - $watch multiple properties for single callback'
order: 14
---

A clever way is to create a computed property that uses all "watched" properties. Then you can define a `watch` property on that computed property and react on each change.
