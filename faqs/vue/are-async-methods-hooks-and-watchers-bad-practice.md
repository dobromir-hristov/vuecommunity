---
question: Is it bad practice to make methods, lifecycle hooks or watchers async?
order: 16
---

It does not hurt, but it is a good practice to extract complex logic to methods instead and then call them from inside a lifecycle hook.
