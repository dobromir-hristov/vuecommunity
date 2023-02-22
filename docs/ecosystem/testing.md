# Testing Vue apps

Testing has always been a scary topic for beginners. Vue being a framework and most often working with `.vue` files has its specifics when it comes to unit testing. The tooling around Vue tries to make the testing experience as painless as possible.

E2E tests however, follow the same path as any other modern web application, so its up to you to choose a tool to test with.

**Tip:** If you are using Vue-CLI, it comes with Unit and E2E testing setup out of the box, so you dont have to setup anything.

## TLDR

1. Use Vue CLI to setup your projects
2. Choose Cypress for e2e tests
3. Choose Jest for unit tests
4. Use Vue Test Utils as a utility testing library

## Most popular testing setups

Vue does not have a specific testing framework of its own, but most people are using [Jest](../guide/ecosystem/jestjs.io) as their unit testing framework of choice. It has an easy to remember API, flexible assertion mechanics and with a large community behind it, you can find many plugins and solutions to common problems.

### Books

If you want to read a book about testing you can give our [Vue Testing Books](../learning/books.md#testing) page a look.

### Courses and more

There are many tutorials and courses out there, however we will show a few that are very well written and considered a "must read".

* [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/) - **The official Vue Test Utils guides**. Full of tips on how to test using Vue Test Utils, Jest, Mocha and more.
* [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/) - A very well written and focused book on testing Vue apps with Vue Test Utils by Vue Test Utils maintainer.
* [afontcu.dev](https://afontcu.dev/) - A very well written blog, full of testing tips and tutorials, authored by Vue Test Utils maintainer.
* [An Introduction To Vue Testing With Jest ](https://www.youtube.com/watch?v=Fbo4pttBZ9k)- Video tutorial on Unit testing with Jest and Vue Test Utils
* [Unit Test Your First Vue.js Component](https://frontstuff.io/unit-test-your-first-vuejs-component) - A very well written introduction to testing Vue Components.
* [Knowing what to test](https://vuejsdevelopers.com/2019/08/26/vue-what-to-unit-test-components/) - A guide on what to test in a Vue component for maximum efficiency.
* [Ui testing best practices](https://github.com/NoriSte/ui-testing-best-practices) - A collection of best practices and tips when testing UI.
* [Gentle Introduction to Javascript TDD](https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/) - A very nicely written multi-part introduction to testing JavaScript in general
* [Test Driven Development in Vue with Cypress](https://www.youtube.com/watch?v=MU7K\_V6rFjM) - Talk on Test Driven Development with Cypress.
* [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests/) - Answer to the long answered question (uses React but concepts are the same)
