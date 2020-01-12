---
question: Where and how can I fetch data from an API in components?
order: 13
---

Most people use the `created` or `mounted` hooks to fetch data. If you are using VueRouter, you can use the `beforeRouterEnter` hook, to even control page rendering and redirects.

If you are using [Nuxt](../ecosystem/nuxt.md) you can use the `asyncData` method to fetch async data and merge it with the components existing data object.
