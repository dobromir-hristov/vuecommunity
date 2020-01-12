---
question: Why is this undefined when using fat arrow functions?
category: General Vue
links:
  Useful Links:
    - href: https://github.com/vuejs-templates/browserify-simple/issues/6#issuecomment-214003282
      text: Explanation by Vue Core member Chris Fritz
order: 9
---

If you are using fat arrow functions to define your methods, that means the `this` scope of those functions is locked to the parent context, not the Vue instance.
