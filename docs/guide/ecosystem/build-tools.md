# Build Tools and Frameworks
Modern web applications are often a mix of custom written modules and third party packages, written in various versions of languages, most of which not supported by older browsers. 

To be used in both browser and sometimes in server context, the application needs to be transformed by a various tools. Their number can vary widely depending on the applied technologies in the project.

Configuring all these tools, making them work across operating systems, and more importantly between each other is not a simple task. Luckily there are tools that ease this process, most of which are abstractions on top of other tools, making configuration and setup even simpler.

Below are some of the more popular ones, used by the Vue community to build both web applications and libraries.

## Vue CLI
Vue CLI is a sophisticated mix of tools for building modern Vue.js applications. Its the official Vue.js build tool, who's purpose is to free developers from having to configure complex build processes and instead focus on writing application code. It offers a quick and interactive project scaffolding with custom presets, with painless upgrade to the build process with future updates.

Developers can leverage features like ESLint, Babel, Unit and End-to-end Testing, PWA support, Instant Prototyping, HMR and more. It comes with a rich and extensive API, with an ever growing list of plugins, further extending its functionality. 

Vue CLI built on top of [Webpack](./build-tools.md#webpack), making it ideal for large and complex web applications. Building libraries with it is possible, but may lead to bigger bundles, compared to a tool like [Rollup](./build-tools.md#rollup).

**Features**
* Interactive project scaffolding
* Full Graphic User Interface for managing Vue projects
* Support for Typescript, Sass, Less, Stylus preprocessing.
* ESLint and Babel pre-configured
* Unit and End-to-end testing out of the box
* Rich api, offering great extendability
* Rich collection of both official and third party plugins, integrating first class tools.

**Useful Links**

* [Vue CLI Docs](https://cli.vuejs.org/)
* [Vue CLI Tutorial](https://flaviocopes.com/vue-cli/)

## Poi
Poi is bundler alternative to Vue CLI, that is also built on top of Webpack. It tries to make development and bundling applications with Webpack as easy as possible by providing a pre-configured environment for building web apps.

Compared to Vue CLI, which is meant to bundle mainly Vue applications, Poi is agnostic and can work with any JavaScript framework. Similar to Vue CLI, it comes with support of Vue files, style preprocessors like SASS, Less and Stylus, JSX templating, asset extraction and minification, HMR support, all with little to no configuration. 

As with Vue CLI, Poi leans more towards building applications than libraries. 

**Features**
* Out of box support for JS, CSS, File assets and more.
* Framework-agnostic, with support for JSX, Vue and more with no configs.
* Great extensibility via configuration api.
* Fits most web apps and npm libraries.
* Great development experience.
* Plugin support for maximum extendability.

**Useful Links**
* [Poi Docs](https://poi.js.org/)
* [Scaffold a Vue.js app with Poi](https://alligator.io/vuejs/vue-scaffold-poi/)

## Bili
Bili is a build tool on top of Rollup, that is meant to make bundling JavaScript libraries easier, without getting in the way.

Its zero-config strategy, applies sensible defaults for the most popular use cases, allowing library authors to focus on developing their packages, and not the build process. 

The tool offers both a command line and Node.js API, so developers are free to choose depending on their needs. It has built in ES2015+ transpilation via Buble and Babel, Typescript support, style extraction with pre and post processing for Sass, Less and Stylus along support for CSS Modules.

**Features**
* Fast, zero-config by default.
* Using Rollup under the hood.
* Automatically transforms JS files using Buble/Babel/TypeScript.
* Built-in support for CSS Sass Stylus Less CSS modules.
* Ridiculously easy to use Rollup plugins if you want.
* Friendly error logging experience.
* Written in TypeScript, automatically generated API docs.

**Useful Links**

* [Bili Docs](https://bili.egoist.sh/)
* [Bundle Vue library with Bili](https://medium.com/@sox/bundle-vue-library-with-bili-65de446365a8)

# Bundlers
Bundlers are complex tools that take both small and large applications, often made out of multiple packages and sub modules, returning a format that is ready to work in the Browser, Node.js or both.
 
Depending on the intended use case, each bundler has its strengths and weaknesses, which we will outline in the list below.

## Webpack
Webpack is the most popular tool for bundling complex web applications. It boasts a widely configurable API, an enormous plugin ecosystem, constantly growing community and more. It is used by the top three JavaScript frameworks as a bundler of choice for applications made with them.

Webpack can import JavaScript files along side assets like images and styles, building a dependency graph which maps modules between each other, generating one or more application bundles.  

**Useful Links**

* [Official Docs](https://webpack.js.org/)
* [Webpack for Everyone](https://laracasts.com/series/webpack-for-everyone)
* [Webpack Academy](https://webpack.academy/)

## Rollup
Rollup is a module bundler, that is more catered towards building libraries, rather than applications. Its purpose is to compile small pieces of code, preferably ES Modules, into larger and more complex applications and libraries. It works best with the ES6 version of JavaScript modules, as it offers a superior API, transforming older formats like CommonJS and AMD to it via plugins. 

The bundler is used to package some of the most popular JavaScript tools and frameworks, including Vue itself.

Rollup has both a command line and Node.js based API, Babel and Buble support, Tree-Shaking (removes unused code), a big list of configuration options, most of which have defaults that are suitable for the majority of libraries.

**Useful Links**

* [Rollup Docs](https://rollupjs.org/guide/en)
* [How to write and build JS libraries in 2018](https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953)

## Parcel
Parcel is a fast, zero configuration web application bundler that aims to bundle most complex applications without any configuration from the developers side. It handles JavaScript, HTML, Assets, Typescript and ESModules seamlessly, transforming and transpiling to format supported by the Browser, all out of the box. 

This is a tool, similar to Webpack as it can handle all kinds of file types, building a dependency graph between all of them, returning one or more application bundles. Where it shines is its zero config approach and sheer speed, which were very noticeable in Webpack 3 and below. Webpack 4 offers a similar simplified configuration and major speed improvements.

**Useful Links**

* [Building Vue.js Apps with Parcel](https://alligator.io/vuejs/vue-parceljs/)
* [Using Parcel In A Vue.js App](https://scotch.io/tutorials/using-parcel-in-a-vuejs-app)

## Brunch
Is a minimalistic asset build tool, which boasts a near zero-config build process. It offers good build speeds, plugin support, live reloading and project scaffolding via official and community written skeletons.

Brunch was made to replace task runners like Gulp or Grunt, before Webpack and Rollup had gained so much traction.

[Vue.js + Brunch: The Webpack Alternative You've Been Hungry For](https://vuejsdevelopers.com/2017/08/20/vue-js-brunch/)
[Getting Started with Brunch](https://scotch.io/tutorials/getting-started-with-brunch-the-ultra-fast-simple-config-build-tool)
[What is Brunch](https://github.com/brunch/brunch-guide/blob/master/content/en/chapter01-whats-brunch.md)
