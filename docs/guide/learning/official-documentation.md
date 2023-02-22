# Official Documentation

The official documentation for Vue.js is divided into several parts, spread across multiple websites covering different topics or core libraries such as [Vuex](https://vuex.vuejs.org), [Vue-Router](https://router.vuejs.org) or [SSR](https://ssr.vuejs.org) guides. All these pages have offline support and can be installed on a mobile phone.

## Guide

The [guide](https://vuejs.org/v2/guide) is commonly praised as one of the main reasons why new developers find Vue.js easy to pick up. It's usually the starting point for a developer interested in learning Vue.

The best way to learn from the guide is by following the [Essentials](https://vuejs.org/v2/guide) section chapter by chapter. Then you can continue with [Components In-Depth](https://vuejs.org/v2/guide/components-registration.html).

If you need more details on specific features, use the robust search system or browse the [API documentation](https://vuejs.org/v2/api/).

### Single File Components

Everything in the guide is written with old Javascript syntax (ES5) and without any build tools required, to make it easy to gradually enhance your websites.

However if you want to use `.vue` files while learning, read the [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) chapter first and then start the guide from the beginning.

To utilize SFC, you can create a [CodeSandbox](https://codesandbox.io/s/vue) project online or scaffold a new project locally using [Vue CLI](https://cli.vuejs.org/), which comes with its separate documentation.

### Reactivity Caveats

Remember to read the [Reactivity in Depth](https://vuejs.org/v2/guide/reactivity.html) chapter which provides ways to deal with some caveats of Vue.js reactivity system, related to working with arrays and objects. This will all be solved in Vue 3 release.

## Style Guide

The [Style Guide](https://vuejs.org/v2/style-guide) is a project meant to provide official best practices guidelines on how to write Vue.js code. It covers only the core library, without Vue-Router or Vuex.

It contains a few sets of rules to follow, based on their priority, with the Essential set considered a bare minimum to use in production. It's still recommended to at least know the other rules even if you don't plan to use them.

### ESLint plugin

The Style Guide is accompanied by an [ESLint plugin](https://github.com/vuejs/eslint-plugin-vue) that allows you to enforce the use of specific guidelines. It comes out of the box with most of Vue related scaffolding tools, including Vue CLI.

## Cookbook

While the role of the guide is to teach you how to use individual features of Vue API, the [cookbook](https://vuejs.org/v2/cookbook) gathers curated recipes for common tasks and use cases.

It consists of separate chapters that focus on particular concepts, such as form validation or working with external API. It's still a work in progress and you're welcome to help with new recipes.

You're supposed to know the guide's content before you dive into the cookbook, the recipes may also assume knowledge of some build tools or packages from the wider Vue ecosystem.

## Examples

Other than small code examples from the official website, there is also an example Github repository with a [Hackernews clone](https://github.com/vuejs/vue-hackernews-2.0) that you can check to see how to write a real Vue.js application. It uses Vue-Router, Vuex, Server Side Rendering and API integration with Firebase.

If that is not enough for you, there's also a semi-official [Vue-Enterprise-Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate) project, written by Chris Fritz, that showcases how you can use Vue.js in large scale applications. You can use it as a base for your new project too.

## Roadmap

Other than the guides, there's also a repository with official [roadmap](https://github.com/vuejs/vue/projects/6), presenting the plans for the upcoming releases of core libraries. Like all plans, it's bound to change sometimes, so don't treat it as obligatory.

## RFCs

Vue core team has recently adopted RFCs (request for comments) as the main way of managing substantial changes to the core libraries of Vue ecosystem. Each RFC Pull Request is a great place for the author to properly explain their motivations, and gather feedback from users and core team. It is, then, a fantastic tool to be aware of possible new features and breaking changes, and also to understand the reasoning behind some decisions.
