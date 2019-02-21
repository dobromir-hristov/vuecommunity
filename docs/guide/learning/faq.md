# Frequently Asked Questions

Below is a collection of the most commonly asked questions that new Vue developers have.

Answers may contain links to other Vue community pages, external articles and blog posts, or even links to specialized docs, where said feature is explained in detail.

::: tip
This page is still in early development. If you feel you can contribute, please dont hesitate to open a PR.
:::

## General Vue related

These are general Vue related questions that span from basic component usage to more specific caveats and edge cases.

### Is Vue a good solution for normal websites

Vue can be used to build any website, from small portfolio pages, to large enterprise level applications. 

As with any JavaScript framework, there are some gotcha's like managing complex global state, SEO for SPA's, to name a few, but these are common for all frameworks and have already well established solutions. 

Check the [How to learn Vue](./how-to-learn-vue.md) page for more info.
  
### What kinds of websites can take advantage of being a SPA

SPA websites are most suitable for web applications, aka Software as a Service, where the user interacts with the website as he would with a desktop application/program. 

That isnt to say, that you cant build blogs, presentational websites or landing pages, they would just require extra steps to be fully competitive to standard server rendered websites.

### What do I need to know to start writing Vue code

HTML, CSS and most importantly some basic JavaScript knowledge. Everything beyond that will only help you build better websites. 

Check the [How to learn Vue](./how-to-learn-vue.md) page for more info.

### Must I know ES201x or can I use normal JavaScript

It is recommended that you know and use ES201x, as it certainly can diminish some common pitfalls, like passing `this` context, object spreading etc, but it is not required. 

### How do I pass data to a component from server inside template

You can use props and pass strings, numbers or json directly into the component's element tag. If you are passing numbers or json, dont forget to use `v-bind` or `:` shorthand syntax.

#### Useful Resources

* [Passing data from Laravel to Vue](https://medium.com/@m_ramsden/passing-data-from-laravel-to-vue-98b9d2a4bd23)

### How do I pass data to distant component

You have a few options. 
* The `$root` as a global store - mostly for very simple applications. Not scalable.
* [Provide/Inject](https://vuejs.org/v2/api/#provide-inject) - advanced api, mostly used for coupled components or on plugin development.
* Vuex as a global store - Most robust and scalable solution. **Usually recommended solution.**

#### Useful Resources

* [State Management](https://vuejs.org/v2/guide/state-management.html)
* [Provide/Inject in Vue 2.2](https://medium.com/@znck/provide-inject-in-vue-2-2-b6473a7f7816)
* [Vuex Docs](https://vuex.vuejs.org/guide/)

### How do I pass data to sibling

You could leverage the parent as a relay, so emit data to it, and it binds that data down to other component, but that can be cumbersome.

You can also use the same techniques as described in [How do I pass data to distant component](#how-do-i-pass-data-to-distant-component).

### Why is this undefined when using fat arrow functions

If you are using fat arrow functions to define your methods, that means the `this` scope of those functions is locked to the parent context, not the Vue instance.

#### Useful Resources

* [Explanation by Vue Core member Chris Fritz](https://github.com/vuejs-templates/browserify-simple/issues/6#issuecomment-214003282)

### Why isn't my property reactive

In Vue 2.x and below, for a property to be reactive, it needs to be predefined in the `data` definition. If you cannot do that for some reason, you need to use the `$set` helper to set that property and make it reactive. When pushing new properties to a nested object, you must either replace the whole object, or again use `$set` to set just the new property.

In Vue 3.x, this is mostly taken care of and should not happen.

#### Useful Resources

* [Change Detection Caveats](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats)
* [Reactivity In Vue.js (And Its Pitfalls)](https://vuejsdevelopers.com/2017/03/05/vue-js-reactivity/)

### How do I update a prop?

Props are considered immutable to the component that owns them. The only way is for the parent component passing the prop, to augment it. 

To do that you can:
 
 * trigger an event via `$emit` and catching it on the parent. **Recommended way.**
 * Call a method passed as a prop - You could also trigger changes on the parent by calling a method passed as a prop.
 * dispatch a Vuex action that changes some shared state - You would most probably use the Vuex state directly, instead of passing as a prop.
 * emit an event via an event bus or similar approach - Works best for distant components. For direct parent/child use first approach.

### How can I pass parameters to a computed property

In two words you cant. If you feel the need to do so, its time to extract a new, smaller component that has the said parameter as a prop or data property. 

The other way is to just use a method, but that will not be cached when used in templates.

### Where and how can I fetch data in component from API

Most people use the `created` or `mounted` hooks to fetch data. If you are using VueRouter you can use the `beforeRouterEnter` hook, to even control page rendering and redirects.

If you are using [Nuxt](../ecosystem/nuxt.md) you can use the `asyncData` method to fetch async data and merge it with the components existing data object.

### How can I call a method when more than one property on the instance updates?

A clever way is to create a computed property that uses all "watched" properties. Then you can define a `watch` property on that computed property and react on each change.

#### Useful Resources

*[Vue GH issue explaining the issue](https://github.com/vuejs/vue/issues/844)

### How can I call a method when a vuex getter or state updates?

Using a watcher, you can watch the `$store` or use the `mapGetter` helper to watch a getter mapped to te component.

### Is it a bad practice to make methods, lifecycle hooks or watchers async?

It does not hurt, but it is a good practice to extract complex logic to methods instead and then call them from inside a lifecylce hook.

### How do I attach event listeners to a slot?

You cannot attach event listeners to slots. You need to pass the methods you want to handle certain events, using Scoped Slots.

#### Useful Resources

* [Advanced Vue Component Design](https://adamwathan.me/advanced-vue-component-design/) - has many similar examples.

### Why are Set and Map not reactive when I have predefined them in my data.

In Vue 2.x they are yet to be reactive. With Vue 3.x this will not be an issue and Maps and Sets will be natively supported.

## Vue Components

### When should I extract components into subcomponents?

There is no golden rule, however there are some rough guidelines:

* when a component begins to do too many things at once - fetch async data, loop list items, render dropdowns, listen to global window events, etc.
* when you need a computed property with a parameter - this is a common giveaway. If you extract a component, the param might be a prop now.
* when a component is too big and complex - if you have a whole page rendered, it is advisable to split out the semantic components (navigation, list, sidebar).

#### Useful Resources

* [How the BEM CSS Naming Scheme Can Improve Vue.js Component Architecture](https://markus.oberlehner.net/blog/how-the-bem-css-naming-scheme-can-improve-vue-component-architecture/)

### Global vs Local registered components

The rule of the thumb is, if a component is generic enough to be used across the whole app, it can be registered globally - buttons, dropdowns, inputs.

If a component has a very tight coupling with a certain page or section of the app, it is better to register it locally, only for that scope. 

Global components are also widely used inside templates of server rendered websites like Laravel, Django or Express. The Vue instance will recognize the components in the template and render them as they are globally registered.

### Am I supposed to use .vue files?

Short answer - no. You can work anyway you see fit.

Long answer - using `.vue` components helps with keeping everything related to the component in one place. IDEs have improved drastically, and have better highlighting and code completion. `.vue` components also allow for using **scoped** or **module** css, preventing styling from leaking into other components. You can also leverage different preprocessors like SASS, LESS, Pug for templating, even TypeScript.

### What are functional components used for?

### How do I use computed properties inside functional component?

Short answer, you dont. Functional components are just plain functions, without an instance and re-render every time the parent renders.

You have two types of functional components, the general kind using `functional:true` in its definition, and the template ones with `<template functional>` tag.

The difference between the two is: 
* the first kind uses render functions or JSX, thus you could import or define simple functions in the `render` method, leveraging them as data transformers, similar to computed properties. Even though not exactly computed properties, it can help you reduce template logic quite allot.
* template based functional components use Vue's templates, thus cannot leverage imported functions as they dont have access to the component definition, except props and the context. You could pass methods and transformers via props, but that is very tedious and requires lots of boilerplate. A trick is to use `$options` to access the component's definition, thus allowing you to access any property in your component.

#### Useful Resources

* [Using methods in functional components](https://github.com/vuejs/vue-loader/issues/1291#issuecomment-393823929)
* [What’s the deal with functional components in Vue.js?](https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0)
* [Functional Components in Vue.js](https://alligator.io/vuejs/functional-components/)

### How to define methods or computed properties inside functional template components?

## Vuex

### When and why should I use global state management

### Do I even need Vuex?

### Vuex vs global event bus

### When I use vuex should I still use events

### Alternative solutions for Vuex

### How to use state management libraries from other frameworks (Redux, RxJS)

### How can I pass parameters to getters?

### Should I do client-server communication in components or vuex actions?

### Should I move all my business logic to Vuex?

### How do I access the Vuex store outside of Vue components or in hooks without access to instance?

### What is the point of mapGetter, mapSetter and other helpers?

### Can adding very big objects in Vuex slow my website down?

### Should all my modules be namespaced or can I mix with global ones?

### How can a namespaced module access properties on a global one and vice versa?

## UI Libraries

### What is a UI library

### When should I use a UI Library

### Which UI library should I use

### What makes a good UI library for Vue

### How to use UI libraries that manipulate DOM (wrappers)
> Not sure about this one

### Differences between the most popular UI libraries

### Mobile vs PWA vs Native

## Server Side Rendering

### Do I need server side rendering?

### What do I need for SSR to work?

### What are the benefits of a SSR app.

### What SSR solution should I pick?

### Will SSR boost my website to top google spot

## Toolchain

### When and why should I use vue-cli

### Are there alternatives to Vue CLI
Yes! You are not tied to Vue CLI, you can roll with your own build setup or you read about one of the alternates covered on our [Build Tools](../ecosystem/build-tools.md) page

### Can I bundle Vue plugins with VueCLI

## CSS

### How does scope styles work
### How to work with preprocessors
### How to import files in `<style>` tag
### How to implement theming in Vue
### How to do CSS in JS with Vue
