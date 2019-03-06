# Documentation platforms

Documentation is a very important part of any software, especially if it is going to be used by more than one developer.

There are a few ways to document software, one is directly inside the code via comments and type declarations, while the other is using external documentation sources, from files (usually .md) inside project to full blown websites.

## Tips on managing docs

## Documentation websites

When choosing a platform to write your docs on, think about your priorities and preferences.

- Do you want to write in markdown files or do you prefer to write html webpages?
- Do you want a custom designed website or a generic one will do just fine?
- Is SEO important to you?
- Do you mind a pre-build step or do you want everything to run as is?
- Do you need custom features, specific for your documentation purposes?
- Where do you plan to host your documentation? Can you use static site hosting or do you need a server?

### Vuepress

[Vuepress](http://vuepress.vuejs.org/) is a Vue-powered static site generator, that by default is optimized for technical documentation.

Vuepress websites are actually Vue based SPA's that use Vue Router and Webpack, with content built from plain markdown files. During the build process, a static server side rendered version of website is generated, ensuring great loading performance and improved SEO, compared to a traditional SPA.

So to answer the questions above:

- You will write in `.md` files, but have the option to use actual Vue components inside them. This gives it an enormous advantage to other similar platforms.
- Vuepress comes with one documentation optimized theme by default, but allows providing custom ones.
- Being Server Side Rendered, all pages are actually static html files, so search crawlers can scan them easily, plus pages load super fast.
- As the markdown files need to be transformed to html, a pre-build step is required. One can do it manually, use CI or deploy to a hosting with a build step, like Netlify.
- As Vupress offers the full power of Vue.js, you can do pretty much any custom component you need.
- Vupress websites, when rendered, are just static html files, so any static file hosting will do, which are cheap, some of them even free. Check our [Hosting](./hosting.md#static-hosting) page for more information on hosting providers.

Learn all about Vuepress on their [documentation website](https://vuepress.vuejs.org/guide/#features) (also built with Vuepress).

### Docute

[Docute](https://docute.org/) is another Vue-powered Single Page Application.

In a nutshell, Docute fetches Markdown files and renders them on the fly in the browser, serving a fully working SPA. Because there is no build process, users can preview and deploy changes immediately, without any pre-build steps.

Because it is built with Vue, components can be defined and used inside the markdown files, which as Vuepress, gives allot of flexibility and customisation.

Here are the answers from the above questions:

- Pages are written in `.md` files, along with the option of using Vue components inside them.
- It comes with a predefined template, which allows some customisation, with currently no other themes available.
- As a normal SPA, not an SSR website, SEO might not be as good in some cases.
- There is no pre-build step. Markdown files are fetched and rendered in the browser.
- It supports plugins as well as custom Vue Components, making customisation quite possible.
- Docute websites can be hosted on static file hosting services, same as Vuepress.

Check out Docute plugins and its other features on their [documentation website](https://docute.org/).

## Other website doc platforms

Below is a list of popular documentation generators, that are not connected to Vue.

- [Docsify](https://docsify.js.org/#/) - native javascript alternative to Docute, with a bit more features, plugins and themes.
- [Jekyll](https://jekyllrb.com/)
- [Hexo](https://hexo.io/)
- [GitBook](https://www.gitbook.com/)
- [Docusaurus](https://github.com/facebook/docusaurus)
- [Docz](https://www.docz.site/)

## Component workbenches

A workbench is a development environment for UI components. It allows developers to setup interactive examples of how a UI component can be used. Simply put, you can setup a live demo of a Vue component by passing different props to it, creating a working sandbox.

This is very powerful when working in big teams with lots of custom UI components. A real rendered component with usage example can be easier to understand than just a text example.

### Storybook

The most used and mature is [storybook](https://storybook.js.org/).

The demos and documentation are writen in JavaScript directly and the plugin ecosystem is very powerful.

Used by Angular, React and many other big players.

#### Pros

- Big and welcoming community
- Supports every feature no exception
- Tons of plugins from visual testing, to integration with sketch symbols

#### Cons

- Bare bones without plugins (no prop detection, no code samples, no styling)
- Input and output format not meant for long descriptions
- Hard to make website beautiful

#### Useful Links

- [Official Guide](https://storybook.js.org/basics/guide-vue/)
- [Using Storybook with VueJS](https://auth0.com/blog/using-storybook-with-vuejs/)
- [Visual testing for Storybook for Vue.js](https://docs.percy.io/docs/storybook-for-vue)

### Vue Styleguidist

[Vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) is a port of [react-styleguidist](https://github.com/styleguidist/react-styleguidist) for vue components.
If you are building a Design System and want to showcase the powers of your components, this would probably be your first choice.

Example: [vue-styleguide](http://rafaelescala.com/vue-styleguide/) or [vue-design-system](https://vueds.com/example/)

It supports all the following vue features:

- Single file components
- Class style components
- Functional component templates
- Template and script commenting (Events, Methods, Props, Slots)
- JSX & TSX
- TypeScript & Flow
- Vuex & Vue-i18n
- externalized sources for script and template
- styled components

#### Documentation style

styleguidist uses JSDoc:

```javascript
props: {
    /**
     * The color for the button example
     */
    colorExtends: {
      type: String,
      default: '#333'
    }
  }
```

#### Pros

- Displays a live editor to try components
- Meant for design system creation (powers vue-design-system)

#### Cons

- Little configurability on output (HTML only)
- JSDoc can be verbose

### Vuese

https://github.com/vuese/vuese

Vuese is a documentation oriented.
It sacrifices a bit of user experience for a lot of integrability.
If you have to generate your doc to integrate it, this is probably the tool that you want.

Example: https://buptsteve.github.io/markdown-it-vuese/example/demo.html#props

It supports all the following vue features:

- Single file components
- Class style components
- Template and script commenting (Events, Methods, Props, Slots)
- JSX & TSX
- TypeScript & Flow
- Vuex & Vue-i18n

#### Documentation style

vuese uses its own documentaion format more compact than JSDoc

```javascript
props: {
  // The name of the form
  name: {
    type: String
  }
}
```

#### Pros

- Compact documentation
- Vuepress default output
- Configurable docute or markdown outputs
- Entirely made with VueJs

#### Cons

- Static code samples

### Vue Design System

https://github.com/viljamis/vue-design-system

Vue designs system is a combination of vue-styleguidist and [salesforce-ux/theo](https://github.com/salesforce-ux/theo) that helps teams build a starter kit for their design system. It is highly opinionated. Choose it if you are starting a new project or if you don't want to think about your own naming.

vueds documentation is a great read, even if you are not going to use it.

## Documentation Generators

Automatic documentation generators scan your files and output a structured format, that is easy to either use directly or be passed to another tool.

Such tools can scan your files for JSDoc blocks and output either a json file or full blown websites, ready to deploy.

### Vuedoc

https://gitlab.com/vuedoc/md

### JSDoc Vuejs

https://github.com/Kocal/jsdoc-vuejs