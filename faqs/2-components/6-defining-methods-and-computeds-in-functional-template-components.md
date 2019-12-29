---
question: How to define methods or computed properties inside functional template components?
category: Components
links:
  Github Issues:
    - href: https://github.com/vuejs/vue-loader/issues/1291#issuecomment-393823929
      text: Using methods in functional template components
      title: View Github issue \#1291 - Support for methods in functional component + template
---

Template based functional components use Vue's template syntax, which means they only have access to the components props and the parent. You cannot define functions as there is no way to reach them from within the template. A trick, or a hack, is to use `$options` property to access the component's definition. It allows you to access any property in the component, essentially allowing for method definition. Check the GitHub issue below for more info.
