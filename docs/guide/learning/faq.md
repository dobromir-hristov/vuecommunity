# Frequently Asked Questions

Below is a collection of the most commonly asked questions that new Vue developers have.

Answers may contain links to other Vue community pages, external articles and blog posts, or even links to specialized docs, where said feature is explained in detail.

::: warning
This page is still in early development. If you feel you can contribute, please don't hesitate to open a PR.
:::

## General Vue related

These are general Vue related questions that span from basic component usage to more specific caveats and edge cases.

### Is Vue a good solution for normal websites

Vue can be used to build any website, from small portfolio pages, to large enterprise level applications. 

As with any JavaScript framework, there are some gotcha's like managing complex global state, SEO for SPA's, to name a few, but these are common for all frameworks and have already well established solutions. 

<useful-links>
<useful-links-section title="More Info">

Check the [How to learn Vue](./how-to-learn-vue.md) page for more info.

</useful-links-section>
</useful-links>
  
### What kinds of websites can take advantage of being a SPA

SPA websites are most suitable for web applications, aka Software as a Service, where the user interacts with the website as he would with a desktop application/program. 

That isnt to say, that you cant build blogs, presentational websites or landing pages, they would just require extra steps to be fully competitive to standard server rendered websites.

### What do I need to know to start writing Vue code

HTML, CSS and most importantly some basic JavaScript knowledge. Everything beyond that will only help you build better websites. 

<useful-links>
<useful-links-section title="Link">

Check the [How to learn Vue](./how-to-learn-vue.md) page for more info.

</useful-links-section>
</useful-links>

### Must I know ES201x or can I use normal JavaScript

It is recommended that you know and use ES201x, as it certainly can diminish some common pitfalls, like passing `this` context, object spreading etc, but it is not required. 

### How do I pass data to a component from server inside template

You can use props and pass strings, numbers or json directly into the component's element tag. If you are passing numbers or json, don't forget to use `v-bind` or `:` shorthand syntax.

<useful-links>
<useful-links-section title="Tutorials">

[Passing data from Laravel to Vue](https://medium.com/@m_ramsden/passing-data-from-laravel-to-vue-98b9d2a4bd23)

</useful-links-section>
</useful-links>

### How do I pass data to a component?

Data is most often passed down to child components via Props, and emitted up to the parents via Events.


<useful-links>
<useful-links-section title="Official">

* [Components Basics](https://vuejs.org/v2/guide/components.html)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Vue.js Component Communication Patterns](https://alligator.io/vuejs/component-communication/)

</useful-links-section>
</useful-links>

### How do I pass data to distant component

You have a few options: 

* Vuex as a global store <badge vertical="middle">Popular</badge> - Most robust and scalable solution. 
* [Provide/Inject](https://vuejs.org/v2/api/#provide-inject) - advanced api, mostly used for coupled components or on plugin development.
* The `$root` as a global store - mostly for very simple applications. Not scalable.

<useful-links>
<useful-links-section title="Official">

* [Vuex Docs](https://vuex.vuejs.org/guide/)
* [Vue State Management](https://vuejs.org/v2/guide/state-management.html)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Provide/Inject in Vue 2.2](https://medium.com/@znck/provide-inject-in-vue-2-2-b6473a7f7816)

</useful-links-section>
</useful-links>

### How do I pass data to sibling

You could leverage the parent as a relay, so emit data to it. The parent binds that data down to other components, but that can be a bit cumbersome.

You can also use the same techniques as described in [How do I pass data to distant component](#how-do-i-pass-data-to-distant-component).

### Why is this undefined when using fat arrow functions

If you are using fat arrow functions to define your methods, that means the `this` scope of those functions is locked to the parent context, not the Vue instance.

<useful-links>
<useful-links-section title="Useful Links">

* [Explanation by Vue Core member Chris Fritz](https://github.com/vuejs-templates/browserify-simple/issues/6#issuecomment-214003282)

</useful-links-section>
</useful-links>

### Why isn't my property reactive

In Vue 2.x and below, for a property to be reactive, it needs to be predefined in the `data` definition. If you cannot do that for some reason, you need to use the `$set` helper to set that property and make it reactive. When pushing new properties to a nested object, you must either replace the whole object, or again use `$set` to set just the new property.

In Vue 3.x, this is mostly taken care of and should not happen.

<useful-links>
<useful-links-section title="Official">

* [Change Detection Caveats](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats)

</useful-links-section>
<useful-links-section title="Useful Links">

* [Reactivity In Vue.js (And Its Pitfalls)](https://vuejsdevelopers.com/2017/03/05/vue-js-reactivity/)

</useful-links-section>
</useful-links>

### How do I update a prop?

Props are considered immutable to the component that defines them. The only way to change a prop, is to notify the parent component passing the prop, to augment it. 

To do that you can:
 
 * trigger an event from the child via `$emit` and handling it on the parent. <badge vertical="middle">Recommended</badge>
 * call a method passed as a prop, that augments the bound prop value. - Typical for React, but still works.
 * dispatch a Vuex action that changes some shared state - You would most probably use the Vuex state directly, instead of passing as a prop.

### How can I pass parameters to a computed property

In two words you shouldn't need to. If you feel the need to do so, you can:
 
* **use a method** - no caching
* **return a function** - it can accept a parameter - almost same as method. no caching.
* **extract a new, smaller component** -  <badge vertical="middle">Recommended</badge> That component will have the said parameter as a prop or data property on it.

<useful-links>
<useful-links-section title="Useful Links">

* [Pass arguments to computed properties - Laracasts Forum](https://laracasts.com/discuss/channels/vue/pass-arguments-to-computed-properties)

</useful-links-section>
</useful-links>

### Where and how can I fetch data in component from API

Most people use the `created` or `mounted` hooks to fetch data. If you are using VueRouter, you can use the `beforeRouterEnter` hook, to even control page rendering and redirects.

If you are using [Nuxt](../ecosystem/nuxt.md) you can use the `asyncData` method to fetch async data and merge it with the components existing data object.

### How can I call a method when more than one property on the instance updates?

A clever way is to create a computed property that uses all "watched" properties. Then you can define a `watch` property on that computed property and react on each change.

<useful-links>
<useful-links-section title="Useful Links">

[Github issue](https://github.com/vuejs/vue/issues/844)

</useful-links-section>
</useful-links>

### How can I call a method when a vuex getter or state updates?

Using a watcher, you can watch the `$store` or use the `mapGetter` helper to watch a getter mapped to the component.

### Is it a bad practice to make methods, lifecycle hooks or watchers async?

It does not hurt, but it is a good practice to extract complex logic to methods instead and then call them from inside a lifecycle hook.

### How do I attach event listeners to a slot?

You cannot attach event listeners to slots. You need to pass the methods you want to handle certain events, using Scoped Slots.

<useful-links>
<useful-links-section title="Tutorials">

* [Advanced Vue Component Design](https://adamwathan.me/advanced-vue-component-design/)

</useful-links-section>
</useful-links>

### Why are Set and Map not reactive when I have predefined them in my data.

In Vue 2.x they are yet to be reactive. With Vue 3.x this will not be an issue and Maps and Sets will be natively supported.

### What can you advise to use for unit testing? Jest? Or Vue Test Utils?

[Jest](https://jestjs.io/) is a testing framework, where as [Vue Test Utils](https://vue-test-utils.vuejs.org/) is a utility library for writing unit tests. It's supposed to be used with Jest, Mocha or other testing library.

## Vue Components

### When should I extract components into subcomponents?

There is no golden rule, however there are some rough guidelines:

* when a component begins to do too many things at once - fetch async data, loop list items, render dropdowns, listen to global window events, etc.
* when you need a computed property with a parameter - this is a common giveaway. If you extract a component, the param might be a prop now.
* when a component is too big and complex - if you have a whole page rendered, it is advisable to split out the semantic components (navigation, list, sidebar).

<useful-links>
<useful-links-section title="Tutorials">

* [How the BEM CSS Naming Scheme Can Improve Vue.js Component Architecture](https://markus.oberlehner.net/blog/how-the-bem-css-naming-scheme-can-improve-vue-component-architecture/)

</useful-links-section>
</useful-links>

### Global vs Local registered components

The rule of the thumb is, if a component is generic enough to be used across the whole app, it can be registered globally - buttons, dropdowns, inputs.

If a component has a very tight coupling with a certain page or section of the app, it is better to register it locally, only for that scope. 

Global components are also widely used inside templates of server rendered websites like Laravel, Django or Express. The Vue instance will recognize the components in the template and render them as they are globally registered.

### Am I supposed to use .vue files?

Short answer - no. You can work anyway you see fit.

Long answer - using `.vue` components helps with keeping everything related to the component in one place. IDEs have improved drastically, and have better highlighting and code completion. `.vue` components also allow for using **scoped** or **module** css, preventing styling from leaking into other components. You can also leverage different preprocessors like SASS, LESS, Pug for templating, even TypeScript.

### What are functional components used for?

Functional components do not have state, methods or instance, they are essentially just plain functions and re-render every time the parent renders. They are perfect for components, that consist of mostly static markup. These components are very fast to render, as they do not have a Vue instance.

They are most often used to create components, that would be rendered hundreds of times on a page, or when the component does not need reactive data.

### How do I use computed properties inside functional component?

Short answer, you don't. 

Functional components generally use render functions or JSX, thus one could import or define simple functions on top of the `render` method, using them inside as data transformers, similar to computed properties. Even though not exactly computed properties, it can help you reduce template logic quite a lot. 

Check the links below for more info and examples.

<useful-links>
<useful-links-section title="Tutorials">

* [What’s the deal with functional components in Vue.js?](https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0)
* [Functional Components in Vue.js](https://alligator.io/vuejs/functional-components/)

</useful-links-section>
</useful-links>

### How to define methods or computed properties inside functional template components?

Template based functional components use Vue's template syntax, which means they only have access to the components props and the parent. You cannot define functions as there is no way to reach them from within the template. A trick, or a hack, is to use `$options` property to access the component's definition. It allows you to access any property in the component, essentially allowing for method definition. Check the GitHub issue below for more info.

<useful-links>
<useful-links-section title="Useful Links">

* [Using methods in functional template components](https://github.com/vuejs/vue-loader/issues/1291#issuecomment-393823929)

</useful-links-section>
</useful-links>

## Vuex

### When and why should I use global state management

Vuex can be used to share reactive data across distant components. This is very useful when you need to share the logged in user across multiple components, open modals from everywhere. You could also centralize all your data fetching logic into Vuex modules, keeping everything in one place, yet have it accessible everywhere.

<useful-links>
<useful-links-section title="Tutorials">

* [Should I Store This Data in Vuex?](https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/)

</useful-links-section>
</useful-links>

### Do I even need Vuex?

This is very well related to the above question. If your data does not need to be accessed by multiple components, or if they are not spread out across multiple depth levels, you might not need Vuex. 

### Vuex vs global event bus

:::warning
The event Bus is considered a bad practice. It is harder to debug, harder to track where events come from, and can cause memory leaks if not handled properly.
:::

You can look at the event bus as a way to trigger actions on components, with the benefit of passing data. This can be useful to trigger a specific method on a distant component, without the need to store any kind of data. 

Vuex on the other hand isn't really great for triggering local actions on components, where it shines is actually keeping the track of state and allowing multiple endpoints to manage it and react upon it's changes. 

To trigger a method on a component with Vuex, you would have to save an unique value in the store, then inside the component you then define a watcher to track for changes on that property, which overcomplicates things a lot.

With the bus, you have to be careful to unregister it before the component is destroyed. It is harder to track, as the devtools does not show fired events, it does for Vuex commits. Vue doesnt warn if you are listening to an event that doenst exist, where as with Vuex, it will warn if you try to access something that doesnt exist.

### When I use vuex should I still use events

Of course you should. When you need to pass data from closely related components, its much easier to use the old fashioned events and props communication. It makes for a more readable and distinguishable component communication, plus the boilerplate in most cases is less.

### Alternative solutions for Vuex

You could use the `$root` object for very small applications. You could also try the provide/inject api for tightly coupled components, which does have some caveats though. One could also try using Redux.

<useful-links>
<useful-links-section title="Tutorials">

* [Should I Store This Data in Vuex?](https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/)
* [Simple state management, simpler than Vuex](http://vuetips.com/simple-state-management-vue-stash)

</useful-links-section>
</useful-links>

### How to use state management libraries from other frameworks (Redux, RxJS)

Vue is very flexible and can be used with any state management library. Check a few examples in the list below.

<useful-links>
<useful-links-section title="Tutorials">

* [How We Use Redux & Redux-Observable with Vue (v3.0 Journal)](https://snipcart.com/blog/redux-vue)
* [Emulate render props in Vuejs](https://medium.com/@titouan.creach_44544/emulate-render-props-in-vuejs-c14086dc8dfa)
* [I did not like Vuex. So I wrote my own state management library](https://codeburst.io/i-did-not-like-vuex-so-i-write-my-own-state-management-library-d4bae49d7f4c)
* [Integrating RxJS with Vue.js](https://alligator.io/vuejs/using-rxjs/)
* [Build Async Vue.js Apps with RxJS](https://egghead.io/courses/build-async-vue-js-apps-with-rxjs)

</useful-links-section>
</useful-links>

### How can I pass parameters to getters?

To pass a parameter to a getter, return a function from within the getter. The function can accept any number of parameters. Keep in mind data is not cached, so the function will run every time you call it.

<useful-links>
<useful-links-section title="Official">

* [Method-Style Access](https://vuex.vuejs.org/guide/getters.html#method-style-access)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Vuex getters are great, but don’t overuse them](https://codeburst.io/vuex-getters-are-great-but-don't-overuse-them-9c946689b414)

</useful-links-section>
</useful-links>

### Should I do client-server communication in components or vuex actions?

There is not right answer here. If your data lives primarily in Vuex and could be fetched/triggered from many places, then you should query the server from within the actions.

If the data needs some special treatment, by a specific component, then it may also be fetched and transformed from within the component itself.

### Should I move all my business logic to Vuex?

You are not required to, as this will substantially increase the amount of boilerplate you need to write. This could however make components lighter and easier to refactor, with most of the heavy lifting moved to Vuex, plus more components can perform these actions. 

This makes however Vuex modules bulky and harder to navigate. Namespaced modules are a must on such cases to reduce name collisions.

### How do I access the Vuex store outside of Vue components or in hooks without access to instance?

If you use the Vue CLI and ES modules, which you should, you can just import the exported Vuex instance (usually inside `src/store/index.js`) and access the whole store from there.

<useful-links>
<useful-links-section title="Useful Links">

* [Accessing Vuex state when defining Vue-Router routes](https://stackoverflow.com/questions/42603909/accessing-vuex-state-when-defining-vue-router-routes)

</useful-links-section>
</useful-links>

### What is the point of mapGetter, mapState and other helpers?

They are used to map getters, state to computed properties, and actions and mutations to methods. If you use namespaced Vuex modules, you can supply the namespace, reducing repetitiveness when defining or accessing store properties..

### Can adding very big objects in Vuex slow my website down?

Yes it can. Very big, complexly nested objects can force Vuex to perform slower especially if there are frequent changes to the object.

### Should all my modules be namespaced or can I mix with global ones?

It is a good practice to namespace all modules, once you begin using them, keeping store access and mutations consistent across modules.
 
 You can however mix them, thus namespaced modules can access getters and trigger actions on modules outside of the current one's scope.

### How can a namespaced module access properties on a global one and vice versa?'

You can use the `rootState` and `rootGetters` parameters in getters to access global, none-namespaced data. Actions have a rooGetters also these two helpers inside its `context` parameter.

[Accessing Global Assets in Namespaced Modules](https://vuex.vuejs.org/guide/modules.html#accessing-global-assets-in-namespaced-modules)

## UI Libraries

### What is a UI library

A UI library is a collection of Vue components and utilities. Such libraries can be fully styled and ready to go, offering maximum prototyping and development speed. They can also be relatively unstlyed, allowing the developers to use them as a foundation, applying their own styling.

Continue reading on the [UI Libraries](../ecosystem/ui-libraries.md) page.

### When should I use a UI Library

UI libraries are perfect for smaller projects or those that are in a hurry, where time does not allow for building a set of custom UI components. Such libraries offer a wide range of pre-built components and utilities, that can dramatically increase the development speed of an application.

UI libraries tend to come pre-styled though, so keep this in mind when choosing. Would you need to restyle and if so, how much effort would it take? Is the library's css flexible enough to allow for the required changes? How well is the said library supported, does it have an english community?

### Which UI library should I use
We have a whole section titled "How to chose an optimal UI library" on this in our [UI Libraries](../ecosystem/ui-libraries.md#how-to-chose-an-optimal-ui-library) page.

### What makes a good UI library for Vue

A good UI library must follow Vue's best practices:

* define props and slots where necessary, emit the right events at the proper times. 
* it should allow for registering only some components, rather than all of them. 
* it should offer a well maintained, easy to search and read documentation.
* a11y is a good to have.

### Differences between the most popular UI libraries
Read more on the [UI Libraries](../ecosystem/ui-libraries.md) page.

### Mobile vs PWA vs Native

Even though you can build mobile apps with all 3 of these technologies, each has its weaknesses and advantages. Please visit the [Mobile Apps](../ecosystem/mobile-apps.md) page, for a a lot more information.

## Server Side Rendering

### Do I need server side rendering?

If you are building a blog, an ecommerce website or a presentational product portfolio, SSR can used as it will help with SEO, social network preview when sharing and decreased load times.

Learn more on our [Server Side Rendering](../ecosystem/server-side-rendering.md#when-and-why-to-use-ssr) page.

### What do I need for SSR to work?

For SSR to work, you will need a Node.js server, serving your application. Upon request, a special tool will receive the page the user is trying to visit, render it's content, and return it to the browser.

Learn more about these tools on [Server Side Rendering - Available tools](../ecosystem/server-side-rendering.md#available-options-for-vue) page.

### What are the benefits of a SSR app.

Server side rendering can help tremendously with SEO and website speed. 

Upon visit, pages are rendered on the server, which usually has higher processing power and faster internet connection, giving an impression of a faster page load.

This will also boost SEO as the HTML will be fully rendered upon visit, helping crawlers to scan the website easier.

Learn more on our [Server Side Rendering - Benefits of SSR](../ecosystem/server-side-rendering.md#benefits-of-ssr) page.

### What SSR solution should I pick?

If you want something that just works with little to no configuration, go with [Nuxt](../ecosystem/server-side-rendering.md#nuxt). To have more freedom and to configure most of the things yourself, [Ream](../ecosystem/server-side-rendering.md#ream) is a good pick. If you need to have full control and setup everything yourself, then [Vue Server Renderer](../ecosystem/server-side-rendering.md#vue-server-renderer) is the one for you.

You might also take a look at [Static site generators](../ecosystem/static-site-generators.md) as those might be a better pick for simpler, more static websites, like personal blogs, portfolios, product pages and so on. 

### Will SSR boost my website to top google spot

SSR can definitely help with SEO, as crawlers will be able to scan the website more easily. This does not however reserve a top stop in google search results. Read about [Benefits of SSR](../ecosystem/server-side-rendering.md#benefits-of-ssr) to see what you can expect.

## Toolchain

### When and why should I use Vue CLI

Vue CLI can save you hours of configuration, before you even start a project. It comes with Webpack pre-configured for bundling Vue apps. This means developers can focus on building the app it self, rather then configuring build processes.

You can use Vue CLI from the beginning, when you are just starting out with Vue, as it will not interfere with the learning process.

### Are there alternatives to Vue CLI

Yes! You are not tied to Vue CLI, you can roll with your own build setup or read about one of the alternates covered on our [Build Tools](../ecosystem/build-tools.md) page.

### Can I bundle Vue plugins with Vue CLI

You can! Vue CLI can be put into library build mode, excluding specific modules from the build and doing optimisations.

<useful-links>
<useful-links-section title="Official">

* [Vue CLI - Library target mode](https://cli.vuejs.org/guide/build-targets.html#library)

</useful-links-section>
<useful-links-section title="Tutorials">

* [How to create, publish and use your own VueJS Component library on NPM using @vue/cli 3.0](https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3)
* [Create & Publish Web Components With Vue CLI 3](https://medium.com/js-dojo/create-publish-web-components-with-vue-cli-3-26f9cfb6583b)

</useful-links-section>
</useful-links>

### What should I use for unit testing? Jest? Or Vue Test Utils?

Jest is a testing framework, where as Vue Test Utils is a utility library (set of helpers). You use Vue Test Utils in tandem with some testing library, like Jest or Mocha.
It's purpose is to make testing Vue components easier, by abstracting away complex and repeatable test preparation code.

<useful-links>
<useful-links-section title="Books">

* [Testing Vue Applications](https://www.manning.com/books/testing-vue-js-applications)
* [Testing Vue.js components with Jest](https://leanpub.com/testingvuejscomponentswithjest)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Testing real world VueJs apps](https://itnext.io/testing-real-world-vuejs-apps-d3e44118f8ce)
* [Testing Vue with Jest](https://alligator.io/vuejs/testing-vue-with-jest/)

</useful-links-section>
</useful-links>


## CSS

### How to work with preprocessors

Simply specify the preprocessor you need by adding a `lang="scss"` tag, with its value being the preprocessor you need. 

Note: this only works in `.vue` SFC components, and we recommend using with Vue CLI.

<useful-links>
<useful-links-section title="Official">

* [Using Pre-Processors](https://vue-loader.vuejs.org/guide/pre-processors.html)

</useful-links-section>
</useful-links>

### How to import files in style tag

If you are using a preprocessor, you can use it's import method, which for example in scss would be `@import "path/to/css/file.scss"`. If you are not using a preprocessor, you can still import files, using a PostCSS plugin.

You can leverage Webpack's file resolution and aliases inside the import statement, which means you can use `~` to access `node_modules` packages `@import "~animate-css"`, or `@` alias to access the `src` folder - `@import "@/components/something"`.

### How do scope styles work

When the `scoped` attribute is applied to the `style` tag, CSS rules defined within it will only apply to the current component. This is done by adding randomly named data attributes to each element, that styled by the rules of that `style` tag. This is done by Vue CLI via PostCSS, behind the scenes while building the application, and does not require any further configuration from the developer.

<useful-links>
<useful-links-section title="Official">

* [Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html)

</useful-links-section>
</useful-links>

### Can I mix both scoped and global styles in one file

Yes, you can mix them, just define a second style tag.
 
<useful-links>
<useful-links-section title="Official">

 * [Mixing Local and Global Styles](https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles)

</useful-links-section>
</useful-links>

### What is the difference between scope styles and css modules

Scoped styles automatically change the css rules to match the auto generated data-attributes on each element that is being styled. This is done without any extra effort from the developer.

CSS Modules allow for, again, uniquely generated classes, that are accessible from within the Vue Template, via a special `$style` property. One major benefit of Modules is that you can export css variables to JavaScript.

<useful-links>
<useful-links-section title="Tutorials">

* [Vue.js - Scoped Styles vs CSS Modules](https://www.netguru.com/codestories/vue.js-scoped-styles-vs-css-modules)

</useful-links-section>
</useful-links>

### How can I target children with scoped styles

Using the `deep` selector in your sass files.

<useful-links>
<useful-links-section title="Tutorial">

[How to Target Child Components with Scoped CSS in Vue](https://bambielli.com/til/2018-08-19-how-to-target-child-components-with-scoped-css-in-vue/#)

</useful-links-section>
</useful-links>


### How to do CSS in JS with Vue

The most popular library for Vue is [vue-styled-components](https://github.com/styled-components/vue-styled-components), which is a port of the original `styled-components` library.
