---
question: How do I pass data to distant component?
category: General Vue
useful-links:
  Official Resources:
    - href: https://vuex.vuejs.org/guide
      text: Vuex Docs
    - href: https://vuejs.org/v2/guide/state-management.html
      text: Vue State Management
  Tutorials:
    - href: https://medium.com/@znck/provide-inject-in-vue-2-2-b6473a7f7816
      text: Provide/Inject in Vue 2.2
---

You have a few options: 

* Vuex as a global store <badge vertical="middle">Popular</badge> - Most robust and scalable solution. 
* [Provide/Inject](https://vuejs.org/v2/api/#provide-inject) - advanced api, mostly used for coupled components or on plugin development.
* The `$root` as a global store - mostly for very simple applications. Not scalable.
