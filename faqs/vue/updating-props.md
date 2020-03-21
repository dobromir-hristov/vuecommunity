---
question: How do I update a prop?
order: 11
---

Props are considered immutable to the component that defines them. The only way to change a prop, is to notify the parent component passing the prop, to augment it. 

To do that you can:

 * trigger an event from the child via `$emit` and handling it on the parent. <badge vertical="middle">Recommended</badge>
 * call a method passed as a prop, that augments the bound prop value. - Typical for React, but still works.
 * dispatch a Vuex action that changes some shared state - You would most probably use the Vuex state directly, instead of passing as a prop.
