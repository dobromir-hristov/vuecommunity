---
question: How can I pass parameters to a computed property?
category: General Vue
useful-links:
  Useful Links:
    - href: https://laracasts.com/discuss/channels/vue/pass-arguments-to-computed-properties
      text: Pass arguments to computed properties - Laracasts Forum
---

In two words you shouldn't need to. If you feel the need to do so, you can:
 
* **use a method** - no caching
* **return a function** - it can accept a parameter - almost same as method. no caching.
* **extract a new, smaller component** -  <badge vertical="middle">Recommended</badge> That component will have the said parameter as a prop or data property on it.
