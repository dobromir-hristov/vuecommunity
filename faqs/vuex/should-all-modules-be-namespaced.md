---
question: Should all my modules be namespaced, or can I mix them with global ones?
order: 13
---

It is a good practice to namespace all modules, once you begin using them, keeping store access and mutations consistent across modules.
 
 You can however mix them, thus namespaced modules can access getters and trigger actions on modules outside of the current one's scope.
