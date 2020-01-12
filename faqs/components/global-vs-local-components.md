---
question: When to use globally- vs locally-registered components?
category: Components
order: 2
---

The rule of the thumb is, if a component is generic enough to be used across the whole app, it can be registered globally - buttons, dropdowns, inputs.

If a component has a very tight coupling with a certain page or section of the app, it is better to register it locally, only for that scope. 

Global components are also widely used inside templates of server rendered websites like Laravel, Django or Express. The Vue instance will recognize the components in the template and render them as they are globally registered.
