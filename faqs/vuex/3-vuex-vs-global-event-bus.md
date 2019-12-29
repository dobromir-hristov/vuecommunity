---
question: What's the difference between Vuex and a global event bus?
category: Vuex
---

:::warning
The event Bus is considered a bad practice. It is harder to debug, harder to track where events come from, and can cause memory leaks if not handled properly.
:::

You can look at the event bus as a way to trigger actions on components, with the benefit of passing data. This can be useful to trigger a specific method on a distant component, without the need to store any kind of data. 

Vuex on the other hand isn't really great for triggering local actions on components, where it shines is actually keeping the track of state and allowing multiple endpoints to manage it and react upon it's changes. 

To trigger a method on a component with Vuex, you would have to save an unique value in the store, then inside the component you then define a watcher to track for changes on that property, which overcomplicates things a lot.

With the bus, you have to be careful to unregister it before the component is destroyed. It is harder to track, as the devtools does not show fired events, it does for Vuex commits. Vue doesnt warn if you are listening to an event that doenst exist, where as with Vuex, it will warn if you try to access something that doesnt exist.
