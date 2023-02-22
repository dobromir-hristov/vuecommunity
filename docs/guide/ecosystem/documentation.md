# Documentation Platforms

Documentation is a very important part of any software, especially if it is going to be used by more than one developer.

There are a few ways to document software, one is directly inside the code via comments and type declarations, while the other is using external documentation sources, from files (usually .md) inside project to full blown websites.

## Documentation Websites

When choosing a platform to write your docs on, think about your priorities and preferences.

* Do you want to write in markdown files or do you prefer to write html webpages?
* Do you want a custom designed website or a generic one will do just fine?
* Is SEO important to you?
* Do you mind a pre-build step or do you want everything to run as is?
* Do you need custom features, specific for your documentation purposes?
* Where do you plan to host your documentation? Can you use static site hosting or do you need a server?

## Summary (TLDR)

* [Vuepress](documentation.md#vuepress)
* [Docute](documentation.md#docute)
* [Storybook](documentation.md#storybook)
* [Vue Styleguidist](documentation.md#vue-styleguidist)

### Vuepress

[Vuepress](http://vuepress.vuejs.org/) is a Vue-powered static site generator, that by default is optimized for technical documentation.

Vuepress websites are actually Vue based SPA's that use Vue Router and Webpack, with content built from plain markdown files. During the build process, a static server side rendered version of website is generated, ensuring great loading performance and improved SEO, compared to a traditional SPA.

So to answer the questions above:

* You will write in `.md` files, but have the option to use actual Vue components inside them. This gives it an enormous advantage to other similar platforms.
* Vuepress comes with one documentation optimized theme by default, but allows providing custom ones.
* Being Server Side Rendered, all pages are actually static html files, so search crawlers can scan them easily, plus pages load super fast.
* As the markdown files need to be transformed to html, a pre-build step is required. One can do it manually, use CI or deploy to a hosting with a build step, like Netlify.
* As Vupress offers the full power of Vue.js, you can do pretty much any custom component you need.
* Vupress websites, when rendered, are just static html files, so any static file hosting will do, which are cheap, some of them even free. Check our [Hosting](hosting.md#static-hosting) page for more information on hosting providers.

[Official Website](https://vuepress.vuejs.org/guide/#features)

[Hosting](hosting.md#static-hosting)

### Docute

[Docute](https://docute.org/) is another Vue-powered Single Page Application.

In a nutshell, Docute fetches Markdown files and renders them on the fly in the browser, serving a fully working SPA. Because there is no build process, users can preview and deploy changes immediately, without any pre-build steps.

Because it is built with Vue, components can be defined and used inside the markdown files, which as Vuepress, gives a lot of flexibility and customisation.

Here are the answers from the above questions:

* Pages are written in `.md` files, along with the option of using Vue components inside them.
* It comes with a predefined template, which allows some customisation, with currently no other themes available.
* As a normal SPA, not an SSR website, SEO might not be as good in some cases.
* There is no pre-build step. Markdown files are fetched and rendered in the browser.
* It supports plugins as well as custom Vue Components, making customisation quite possible.
* Docute websites can be hosted on static file hosting services, same as Vuepress.
* [Official Website](https://docute.org/).

## Other Website Doc Platforms

Below is a list of popular documentation generators, that are not connected to Vue.

* [Docsify](https://docsify.js.org/#/) - native javascript alternative to Docute
* [Jekyll](https://jekyllrb.com/)
* [Hexo](https://hexo.io/)
* [GitBook](https://www.gitbook.com/)
* [Docusaurus](https://github.com/facebook/docusaurus)
* [Docz](https://www.docz.site/)

## Component Workbenches

A workbench is a development environment for UI components. It allows developers to setup interactive examples of how a UI component can be used. One can setup a live demo of a Vue component by passing different props to it. Perfect to show your designer or for you to test the result of your work

Workbenches are very powerful when working in big teams with lots of components. They allow other developers to discover how components work by tweaking them. Even better, these showcases can turn into static websites.

### Storybook

The most popular workbench is [storybook](https://storybook.js.org/docs/guides/guide-vue/).

In storybook, you write demo components (stories) in JavaScript or TypeScript. There can be mutiple stories for each component, but each story will have its own page.

Vue.js is a first class citizen in storybook, which means it has great integration and support. Stories are written in JavaScript and developed through a Webpack Dev Server. Existing Webpack configurations for your project will continue to work with storybook.

#### Documentation Style

Storybook uses a separate JavaScript file to host documentation for a component.

```javascript
// my-button.story.js
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import MyButton from './Button.vue';

storiesOf('Button', module)
  .add('with text', () => '<my-button>with text</my-button>')
  .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
  .add('as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));
```

::: tip Pros

* The community is big and active
* Lots of mature [plugins](documentation.md#essential-plugins)
  * Visual testing
  * Sketch symbol exports
  * Accessibility checks
* Easily adopted by front-end developers (Examples are written in JavaScript/TypeScript) :::

::: danger Cons

* Bare bones, without plugins out of the box (no prop detection, no code samples, no styling)
* Input and output formats not practical for long descriptions
* Stories are string litterals, so there is no syntax highlighting.
* Only one "story" per page
* Need to create a separate `webpack.config.js` file :::
* [@storybook/addon-a11y](https://github.com/storybooks/storybook/tree/next/addons/a11y) checks accessibility properties
* [@storybook/addon-knobs](https://github.com/storybooks/storybook) add controls to change usage of your component
* [@storybook/addon-storysource](https://github.com/storybooks/storybook) shows the source code of the template used for the story
* [storybook-addon-vue-info](https://github.com/pocka/storybook-addon-vue-info) detects props info
* [storybook-vue-router](https://github.com/gvaldambrini/storybook-router) add routes to your stories

### Vue Styleguidist

[Vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) is a port of [react-styleguidist](https://github.com/styleguidist/react-styleguidist) for vue components. You are building a Design System. You want a site to showcase your components, this should be your first choice.

#### Documentation Style

Styleguidist uses standard JSDoc comments to extract useful meta data from components.

```html
<template>
  <form :name="name">
    {{name}}
    <input type="text">
    <button @click="clear">clear</button>
  </form>
</template>

<script>
/**
  * This is a description of the component
  */
export default {
  name: 'MyComponent',
  props: {
    /**
     * The name of the form, up to 8 characters
     */
    name: {
      type: [String, Number],
      required: true,
      validator () {}
    }
  },
  methods: {
    /**
     * Used to manually clear the form
     * @public
     */
    clear () {
      /**
       * Fire when the form is cleared
       * @property The argument is a boolean value representing xxx
       */
      this.$emit('onclear', true)
    }
  }
}
</script>

<docs>
Here you can use markdown to show uses of the above component.

## The form component can be set with a nane

Here give a reason for using the component. The code samples are going to be rendered automatically with the current comment.

'''vue
<MyComponent name='My nice form'>
'''
</docs>
```

::: tip Pros

* Detects props, events, methods and slots automatically
* Documentation is done inside the components using standard JSDoc
* Markdown documentation can live inside custom `<docs>` block of a Single File Component
* Displays a live editor to try components even on the static website
* Meant for design system creation and showcase (powers vue-design-system)
* Highly customizable HTML output template
  * Multiple component examples can be shown in the same markdown page
  * Components can be grouped by sections :::

::: danger Cons

* Generated output is currently limited to HTML
* JSDoc can be verbose
* The tool is built in React. To customize the template, you will need to use React. :::
* [Documentation](https://vue-styleguidist.github.io/)
* [Github](https://github.com/vue-styleguidist/vue-styleguidist)
* [Discord Channel](https://discordapp.com/channels/325477692906536972/538786416092512278)
* [Live Example](http://rafaelescala.com/vue-styleguide/)

### Vuese

[Vuese](https://github.com/vuese/vuese) is documentation oriented. It sacrifices interactivity to be more integrable. If you have to generate your doc to integrate it in a bigger one, this is the workbench that you want. Without sacrificing the Hot Module Reload, it generates a good looking static doc.

#### Documentation Style

Vuese uses its own documentation format, more compact than JSDoc.

```javascript
// This is a description of the component
export default {
  name: 'MyComponent',
  props: {
    // The name of the form, up to 8 characters
    name: {
      type: [String, Number],
      required: true,
      validator () {}
    }
  },
  methods: {
    // @vuese
    // Used to manually clear the form
    clear () {
      // Fire when the form is cleared
      // @arg The argument is a boolean value representing xxx
      this.$emit('onclear', true)
    }
  }
}
```

::: tip Pros

* Detects props, events, methods and slots automatically
* Compact documentation in components
* Vuepress default output
* Configurable docute or markdown outputs
* Entirely made with VueJs :::

::: danger Cons

* Static code samples
* Not fully compliant with all Vue.js specs. Does not support (yet):
  * Functional component template props
  * Slots added to a render function
  * Decorator component names like `@Component({name:'MyComponent'})`

:::

* [Github](https://github.com/vuese/vuese)
* [Live Example](https://buptsteve.github.io/markdown-it-vuese/example/demo.html#props)

### Vue Design System

Vue design system is a combination of [vue-styleguidist](documentation.md#vue-styleguidist) and [salesforce-ux/theo](https://github.com/salesforce-ux/theo). It goes by _vueds_ for short. Vueds is a boilerplate for making your own design systems. It is highly opinionated. If you are starting a new project or if you don't want to think about your naming conventions simply clone the project.

[vueds documentation](https://github.com/viljamis/vue-design-system/wiki) is a great read. Even if you are not going to use it directly, you will love to learn about design systems and how to use them.

* [Official website](https://vueds.com/)
* [Github](https://github.com/viljamis/vue-design-system)
* [Live Example](https://vueds.com/example/)

## Documentation Generators

Automatic documentation generators scan your files and output a structured format. Some create markdown, some create html pages.

### Vuedoc

Vuedoc is extracting JSDoc to write documentation in a markdown file.

* [Gitlab](https://gitlab.com/vuedoc/md)
* [JSDoc3 plugin](https://github.com/ccqgithub/jsdoc-vuedoc) Generate JSDoc3 powered documentations using vuedoc.

### JSDoc Vuejs

This writes an html page by extracting the JSDoc from your component. Internally, it runs on JSDoc3. It supports 4 different output formats:

* [Github](https://github.com/Kocal/jsdoc-vuejs)
* Default: made by Kocal author of jsdoc-vuejs
* [Docstrap](https://github.com/docstrap/docstrap)
* [Minami](https://github.com/nijikokun/minami)
* [Tui](https://nhnent.github.io/tui.jsdoc-template/latest/)
