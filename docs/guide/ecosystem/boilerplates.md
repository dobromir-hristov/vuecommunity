# Boilerplates

Boilerplates are pre-configured projects, that are meant to give a good head start when building larger applications. They tend follow best practices for the technologies that they incorporate, with the better ones keeping a good, up to date documentation on how to use and extend them.

Bad part about boilerplates is that once you start developing on top of one, it is hard to keep track of its future updates, as you have to apply them manually.

## Summary (TLDR)

[Vue Enterprise Boilerplate](boilerplates.md#vue-enterprise-boilerplate) - very popular, suitable for enterprise apps.

* [NW.js + Vue-CLI](boilerplates.md#nw-js-vue-cli)
* [Electron-Vue](boilerplates.md#electron-vue)

[Vue-Express](boilerplates.md#vue-express)

## Vue Enterprise Boilerplate

A very detailed and well made boilerplate by Vue Core team member Chris Fritz. It incorporates an opinionated structure, first class testing practices, generators to speed up common development tasks, globally auto registered components, scoped Vuex modules and more.

The project is very well documented, with detailed explanations for each section. It even comes with a preconfigured setup for VSCode, adding intellisense when importing and working with files.

[Vue Enterprise Boilerplate - Github](https://github.com/chrisvfritz/vue-enterprise-boilerplate)

## Vuesion

Vuesion is an actively maintained boilerplate for enterprise level, production-ready PWAs. It focuses on performance, development speed, and best practices.

The boilerplate is build on top of the idea of micro-services or a service-oriented-architecture.

It shows best practices for fetching async data, setting up i18n, persisting Vuex state on page refresh, Typescript support, Routing with data prefetching and more.

[Vuesion - Github](https://github.com/vuesion/vuesion)

## NW.js + Vue-CLI

Comes with the latest versions of NW.js, Vue-CLI, Vue, Vue-DevTools, Babel, ESLint, and Jest. Including 100% test coverage, and basic examples of interacting with the file system, OS, and node\_modules directly from your component. Automated builds for each OS are set up via `npm run build` and are easily customized in the `package.json`.

This is repo is meant to be the "go to" option for building all desktop apps with Vue. So it avoids pushing any particular choices on to you. Particularly things easily added via Vue-CLI (like Vue-Router, Vuex, etc.). With the exception of testing being set up for Jest, and Linting being set up to ensure quality of the boilerplate itself. Both of which can be easily modified, ignored, or removed.

[NW.js + Vue-CLI - Github](https://github.com/nwutils/nw-vue-cli-example)

## Electron-Vue

This is an Electron & Vue.js quick start boilerplate that comes with vue-cli scaffolding. It has common Vue plugins pre-installed, electron-packager/electron-builder allowing the application to be bundled as an installable package, unit and e2e testing support, vue-devtools and more.

The aim of the project is to remove the need of manually setting up electron apps using Vue. Electron-vue takes advantage of vue-cli for scaffolding, webpack with vue-loader, electron-packager or electron-builder, and some of the most commonly used plugins like vue-router, vuex, and more.

[Electron-Vue - Github](https://github.com/SimulatedGREG/electron-vue)

## Vue-Express

Vue-Express is a full stack boilerplate project with VueJS, ExpressJS, MongoDB (MEVN). It is an up-to-date starter repo which contains important functions like user signup, login, oauth, profile and others.

The boilerplate incorporates popular tools like i18next, GraphQL with Apollo, NodeMailer on the server side with VueRouter, Vuex, Vue-form-generator, PassportJS, websockets and more on the client side.

[Vue-Express - Github](https://github.com/icebob/vue-express-mongo-boilerplate)

## Real World Vue.js Boilerplate

Real world application boilerplate, showcasing best practices for organising and structuring larger projects.

It incorporates an Http request class for implementing API calls with Auth and tokens refresh based on Axios, Data access layer, Response success and error wrapper, layout components, helper mixins and more.

[Beauty vuejs boilerplate - Github](https://github.com/zmts/beauty-vuejs-boilerplate)

## Vuexpresso

Vuexpresso is a skeleton app that eases the setup process when building applications with Express, Vue, Vuex, GraphQL, Webpack, MongoDB, Apollo.

The project incorporates Storybook for interactively testing UI components. It offers a preconfigures Vuex store and Vue Router, with Pug and Stylus as default preprocessors.

[Vuexpresso - Github](https://github.com/Ethaan/vuexpresso)

## Laravel Vue Boilerplate

This is a Laravel 5 powered boilerplate with a Single Page Application front-end architecture, using Vue.js, GraphQL, Bootstrap 4, TypeScript, Sass and Pug.

It drastically eases the process of setting up a Vue SPA with a Laravel API. It offers an admin CRUD interface written in RESTful and GraphQL. I18n support with sharing locale messages between Laravel and Vue, Authentication using JWT, WebSockets with Laravel Echo and Pusher, Unit testing Vue components with Jest and API tests using PHPUnit.

It is configured to run tests on Docker, GitLab CI (with continuous deploy), Travis CI, CircleCI, AppVeyor and VSTS CI on Windows, Linux and macOS.

[Laravel Vue Boilerplate - Github](https://github.com/alefesouza/laravel-vue-boilerplate)

## Laravel Bootstrap 4 Vue

This is a Laravel and Bootstrap 4 based starter kit with lite blogging feature, user account registration/management and full Vue Tabler Backend based on Laravel 5.7.

It incorporates Social authentication, login throttling and recaptcha, image optimization on upload and more.

Out of the box, the offered admin panel is a Vue SPA, and the front-end is a standard Laravel rendered website with support for Vue adding components.

[Laravel Bootstrap 4 Vue - Github](https://github.com/adr1enbe4udou1n/laravel-boilerplate)

## Hare - Vue Koa Nuxt.js

SSR application starter boilerplate based on Vue.js, Koa 2.x, Element-UI and Nuxt.js. Comes with front-end testing preconfigured using Ava, preconfigured Nuxt rendering with Koa, configured Vuex store and more.

[Hare - Github](https://github.com/clarkdo/hare)

## vue-hackernews-2.0

> HackerNews clone built with Vue 2.0 + vue-router + vuex, with server-side rendering.

Not a boilerplate, but a very well structured application, showing how to approach things like SSR, PWA, SFC, Animations and more in larger Vue based applications.

[vue-hackernews-2.0 - Github](https://github.com/vuejs/vue-hackernews-2.0)
