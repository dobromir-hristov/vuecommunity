---
question: Should I do client-server communication in components or vuex actions?
category: Vuex
order: 8
---

There is not right answer here. If your data lives primarily in Vuex and could be fetched/triggered from many places, then you should query the server from within the actions.

If the data needs some special treatment, by a specific component, then it may also be fetched and transformed from within the component itself.
