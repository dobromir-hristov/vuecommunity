---
question: How do scoped styles work?
category: Cascading Style Sheets
useful-links:
  Offcial Resources:
    - href: https://vue-loader.vuejs.org/guide/scoped-css.html
      text: Scoped CSS
---

When the `scoped` attribute is applied to the `style` tag, CSS rules defined within it will only apply to the current component. This is done by adding randomly named data attributes to each element, that styled by the rules of that `style` tag. This is done by Vue CLI via PostCSS, behind the scenes while building the application, and does not require any further configuration from the developer.
