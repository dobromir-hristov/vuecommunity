---
title: Handling Forms
---

# Forms

Vue.js comes with a lot of features that make working with forms easier out of the box, like the reactivity and events with modifiers and the two-way binding system on top of it. But if the libraries can speed up the development process and provide a ready to use, well tested environment, it may be worth to just use them instead of baking own alternative.

## Summary (TLDR)

Here are the top pics from each category

<useful-links>
<useful-links-section title="Easy Validation">

[Vee-Validate](#vee-validate) - little boilerplate, very intuitive, vastly popular

</useful-links-section>
<useful-links-section title="Customizable Validation">

[Vuelidate](#vuelidate) - very customisable

</useful-links-section>
<useful-links-section title="Forms generator">

[Vue Form Generator](#vue-form-generator) - provides the most fields out of the box

</useful-links-section>
<useful-links-section title="Most flexible">

[Vue Formulate](#vue-formulate) - covers both form generator and state management use cases

</useful-links-section>
</useful-links>

## Form Validation

You can write a simple form validation yourself, but if you want a well tested solution that's easy to get help with from other Vue developers, give a try to one of the libraries described below.

### Vee-Validate

[Vee-Validate](https://github.com/baianat/vee-validate) is a an all-inclusive library with string-based validators. One of its biggest advantages is that it's fully compatible with form validation of Laravel framework, which made it very popular among PHP developers. The validation is applied to form fields using scoped slots, allowing the users to keep the validators directly in the template if such is their preference. Another advantage is that it offers localized messages for validation rules.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/logaretm/vee-validate) 
* [Docs](https://logaretm.github.io/vee-validate) 

</useful-links-section>
<useful-links-section title="Tutorials">

* [Template-Based Form Validation with Vue.js and vee-validate](https://alligator.io/vuejs/template-form-validation-vee-validate/)

</useful-links-section>
</useful-links>

### Vuelidate

With [Vuelidate](https://github.com/vuelidate/vuelidate) you don't validate your form fields directly, but rather by validating the data of your component, which state is compared to provided validation schema. Unlike string-based Vee-Validate, all validators in Vuelidate are functions. Vuelidate has many useful features but you will have to write some additional code too or use 3rd party plugins, like for the missing error messages handling.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/vuelidate/vuelidate) 
* [Docs](https://vuelidate.js.org/) 

</useful-links-section>
<useful-links-section title="Tutorials">

* [Simple Vue.js Form Validation with Vuelidate](https://vuejsdevelopers.com/2018/08/27/vue-js-form-handling-vuelidate/)

</useful-links-section>
</useful-links>

## Form Generators

Form generators are libraries that allow users to generate a set of form elements based on so called schema - data representation of form fields with support for various custom properties that are later applied to some more or less generic templates. There were multiple projects with an ambition to write an ideal form generator for Vue.js, but out of them, the following ones achieved a state in which they're suitable for actual use.

### Vue-Form-Generator

[Vue-Form-Generator](https://github.com/icebob/vue-form-generator) is the most popular form generator for Vue.js. It uses an array based schema, it's own validation solution and a set of templates based on Bootstrap. You can use one of two builds - basic with most commonly used fields and the full one, with all the bells and whistles the library has to offer. Both can be extended with your custom fields.

The library has good documentation, high test coverage, and was the first fully production ready project of its kind for Vue.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/icebob/vue-form-generator)
* [Docs](https://icebob.gitbooks.io/vueformgenerator)

</useful-links-section>
</useful-links>

### Vue Formulate (Vue 2.x) 

[Vue Formulate](https://github.com/wearebraid/vue-formulate) excels in its flexibility. You can treat it as a form generator or compose the forms directly in the template from provided components. Out of the box, it comes without the more complex components available for Vue-Form-Generator, but it's easy to create your own thanks to robust plugin and scoped slots architecture, which gives hopes for an ecosystem of 3rd party extensions in the future. You're also not bound to a specific CSS framework.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/wearebraid/vue-formulate)
* [Docs](https://vueformulate.com)

</useful-links-section>
</useful-links>

### FormKit (Vue 3.x) <badge text="Most Flexible"/>

[FormKit](https://github.com/formkit/formkit) Is the Vue 3 successor to Vue Formulate made by the same core authors. FormKit takes all the learnings from Vue Formulate and improves on them. The new FormKit Schema for form generation has support for dynamic expressions allowing developers to leverage conditional logic in their schemas while still being fully serializable for storage in a database. FormKit also features numerous plugins to extend functionality, over 30 built-in validation rules, internationalization (i18n) with more than 40 community provided translations, and an optional commercial collection of Pro (non-native) input types for those who want to support the development of the open-source project.

The project is well maintained and offers extensive documentation, interactive examples with a built-in playground, and active support via their 1200+ member Discord community.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/formkit/formkit)
* [Docs](https://formkit.com)
* [Discord](https://discord.gg/2q3UZkUQbR)

</useful-links-section>
</useful-links>

### Vue-Formly

[Vue-Formly](https://github.com/formly-js/vue-formly) takes obvious inspiration from [Angular-Formly](http://angular-formly.com). It's an older project, written originally for Vue 1, but now fully working with Vue 2. 

It allows you to write your custom set of templates or use the standard components for Bootstrap, which are available as a separate library. Just like Vue-Form-Generator, it uses its own validation system.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/formly-js/vue-formly) 
* [Docs](https://matt-sanders.gitbooks.io/vue-formly)

</useful-links-section>
</useful-links>

## Form State Management

Form state management libraries usually have smaller scope than form generators and their main task is to help the developer to get rid of the common boilerplate. It takes care of the most annoying parts of writing forms, while still leaving you the full control over your templates. Such libraries can have different structure, based on classes, scoped slots or mixins.

### Vue-Final-Form

[Vue-Final-Form](https://github.com/egoist/vue-final-form) is a scoped slots based integration of Final Form, a framework-agnostic library that became pretty famous thanks to its subscription based state management system. Among its advantages are nice API and the focus on performance. Being written by [Egoist](https://twitter.com/_egoistlily), a Vue.js Core Team alumni, will also be a plus for many.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/egoist/vue-final-form) 
* [Docs](https://egoist.github.io/vue-final-form)

</useful-links-section>
</useful-links>


### Vue-SimpleForm

[Vue-SimpleForm](https://github.com/blocka/vue-simpleform) is heavily influenced by [Formik](https://github.com/jaredpalmer/formik), a popular forms solution in React ecosystem. In order to use it, you just pass the form with its fields as a scoped slot to a wrapper component and it manages the state for you. If you're familiar with Formik because of your React experience and like how it works, by all means give it a go.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/blocka/vue-simpleform)

</useful-links-section>
</useful-links>

## Other Libraries

There are many kinds of form related libraries that serve different purposes. Let's mention the most popular among them.

### Vue-Form-Wizard

[Vue-Form-Wizard](https://github.com/cristijora/vue-form-wizard) allows you to create a multiple step form wizard, commonly used in online shops and other commercial web apps.

You can use it with UI and validation libraries of your choice, it also provides support for Vue-Router. Its author, [Cristi Jora](https://twitter.com/jora_cristi), took the effort to provide comprehensive documentation and many code examples for different use cases.


<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/cristijora/vue-form-wizard) 
* [Docs](https://cristijora.github.io/vue-form-wizard)

</useful-links-section>
</useful-links>


### Vue-Multiselect

Out of all kinds of form fields, multiselect is usually the most tricky to implement. Luckily [Damian Dulisz](https://twitter.com/damiandulisz) from the Core Team took care of that and wrote [Vue-Multiselect](https://github.com/shentao/vue-multiselect). Thanks to smart architecture, it's highly configurable and you can make it look the way it fully fits your design.

<useful-links>
<useful-links-section title="Official">

* [GitHub Repo](https://github.com/shentao/vue-multiselect) 
* [Docs](https://vue-multiselect.js.org)

</useful-links-section>
<useful-links-section title="Tutorials">

* [How to create a custom selected list using Multiselect](https://medium.com/@hugodesigns/how-to-use-the-most-complete-selecting-solution-for-vue-js-f991b2605364)

</useful-links-section>
</useful-links>


## Learning materials

Here's a list of selected general materials on how to write forms in Vue.js that don't require using any specific library.

<useful-links>
<useful-links-section title="Tutorials">

* [An imperative guide to forms in Vue.js 2](https://logrocket.com/blog/an-imperative-guide-to-forms-in-vue-js-2/)

</useful-links-section>
<useful-links-section title="Books">

* [Building Forms with Vue.js](https://vue-community.org/guide/learning/books.html#building-forms-with-vue-js)

</useful-links-section>
</useful-links>
