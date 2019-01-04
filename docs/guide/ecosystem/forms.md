# Forms

It's relatively easy to write a nice forms system in Vue.js, thanks to its reactivity and robust events system with modifiers and simple two-way binding. But if the libraries can speed up the development process and provide a ready to use, well tested environment that works with multiple use cases, it may be worth to just use them instead of baking own alternative.

## Form Validation

It's not difficult to write a custom form validation system for Vue.js forms, but if you want a well tested solution that's easy to get help with from other Vue developers, give a try to the libraries described below.

### Vee-Validate

[Vee-Validate](https://github.com/baianat/vee-validate) is a an all-inclusive library with string-based validators. It's biggest perk is that it's fully compatible with form validation of Laravel framework, which helped to boost its popularity among PHP developers. The validation is applied to template elements using custom directives which makes it easy to keep the validators directly in the template if that's your thing.

[github](https://github.com/baianat/vee-validate) [documentation](https://baianat.github.io/vee-validate)

### Vuelidate

With [Vuelidate](https://github.com/monterail/vuelidate) you don't validate your form fields directly, but rather by validating the data of your component, which state is compared to provided validation schema. Unlike string-based Vee-Validate, all validators in Vuelidate are functions. Vuelidate has many useful features but you will have to write some additional code too or use 3rd party plugins, like for the missing error messages handling.

[github](https://github.com/monterail/vuelidate) [documentation](https://monterail.github.io/vuelidate) [tutorial](https://vuejsdevelopers.com/2018/08/27/vue-js-form-handling-vuelidate/)

## Form Generators

Form generators are libraries that allow users to generate a set of form elements based on so called schema - data representation of form fields with support for various custom properties that are later applied to some more or less generic templates. There were multiple projects with an ambition to write an ideal form generator for Vue.js, but out of them, there are two worth using in production.

### Vue-Form-Generator

[Vue-Form-Generator](https://github.com/icebob/vue-form-generator) is the most popular form generator for Vue.js. It uses an array based schema, it's own validation solution and a set of templates based on Bootstrap. You can use one of two builds - basic with most commonly used fields and full with all the bells and whistles the library has to offer. Both can be extended with your custom fields.

Vue-Form-Generator has nice documentation and test coverage, it's also stable and can be considered fully production ready.

[github](https://github.com/icebob/vue-form-generator) [documentation](https://icebob.gitbooks.io/vueformgenerator/content)

### Vue-Formly

[Vue-Formly](https://github.com/formly-js/vue-formly) takes obvious inspiration from [Angular-Formly](http://angular-formly.com). It's an older project, written originally for Vue 1, but now fully working with Vue 2. 

It allows you to write your custom set of templates, out of the box there's also a set of components for Bootstrap, available as a separate library. Just like Vue-Form-Generator, it uses its own validation system. It's not as well maintained though.

[github](https://github.com/formly-js/vue-formly) [documentation](https://matt-sanders.gitbooks.io/vue-formly)

## Form State Management

Form state management libraries usually have smaller scope than form generators and their main task is to help the developer to get rid of the common boilerplate. It takes care of the most annoying parts of writing forms, while still leaving you the full control over your templates. Such libraries can have different structure, based on classes, scoped slots or mixins.

### Vue-Final-Form

[Vue-Final-Form]() is a scoped slots based integration of Final Form, a framework-agnostic library that became pretty famous thanks to its subscription based state management system. Among its advantages are nice API and the focus on performance. Being written by [Egoist](), one of Vue.js Core Team members, will also be a plus for many.

[github](https://github.com/egoist/vue-final-form) [documentation](https://egoist.github.io/vue-final-form)

### Vue-SimpleForm

[Vue-SimpleForm](https://github.com/blocka/vue-simpleform) is heavily influenced by [Formik](https://github.com/jaredpalmer/formik), a popular forms solution in React ecosystem. It's pretty easy to use, you just pass the form with its fields as a scoped slot to a wrapper component and it manages the state for you. If you're familiar with Formik because of your React experience and like how it works, by all means give it a go.

[github](https://github.com/blocka/vue-simpleform)

## Other Libraries

There are many kinds of form related libraries that serve different purposes. Let's mention the most popular among them.

### Vue-Form-Wizard

[Vue-Form-Wizard](https://github.com/cristijora/vue-form-wizard) is a different kind of forms related library. It lets you to create a multiple step form wizard, commonly used in online shops and other commercial webapps.

You can use it with UI and validation libraries of your choice, it also provides support for Vue-Router. [Cristi Jora](https://twitter.com/jora_cristi), took the effort to provide comprehensive documentation and many code examples for different use cases.

[github](https://github.com/cristijora/vue-form-wizard) [documentation](https://cristijora.github.io/vue-form-wizard)

### Vue-Multiselect

Out of all kinds of form fields, multiselect is usually the most tricky to implement. Fear not though, for [Damian Dulisz](https://twitter.com/damiandulisz) from the Core Team is here for the rescue with his [Vue-Multiselect](https://github.com/shentao/vue-multiselect) library. Thanks to its smart architecture, Vue-Multiselect is highly configurable and you can make it look the way it fully fits your design.

[github](https://github.com/shentao/vue-multiselect) [documentation](https://vue-multiselect.js.org) [tutorial](https://medium.com/@hugodesigns/how-to-use-the-most-complete-selecting-solution-for-vue-js-f991b2605364)

## Form tutorials

Here's a list of selected general tutorials on how to write forms in Vue.js that don't require using any specific library.

[An imperative guide to forms in Vue.js 2](https://logrocket.com/blog/an-imperative-guide-to-forms-in-vue-js-2/)