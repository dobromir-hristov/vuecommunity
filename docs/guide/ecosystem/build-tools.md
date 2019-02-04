# Build Tools and Frameworks
Modern web applications are often a mix of custom written modules and third party packages, written in various versions of languages, most of which not supported by older browsers. 

To be used in both browser and sometimes in server context, the application needs to be transformed by a various tools. Their number can vary widely depending on the applied technologies in the project.

Configuring all these tools, making them work across operating systems, and more importantly between each other is not a simple task. Luckily there are tools that ease this process, most of which are abstractions on top of other tools, making configuration and setup even simpler.

Below are some of the more popular ones, used by the Vue community to build both web applications and libraries.

## Vue CLI
Vue CLI is a sophisticated mix of tools for building modern Vue.js applications. Its the official Vue.js build tool, who's purpose is to free developers from having to configure complex build processes and instead focus on writing application code.

Developers can leverage features like ESLint, Babel, Unit and End-to-end Testing, PWA support, Instant Prototyping, HMR and more. It offers a rich and extensive API, with an ever growing list of plugins, further extending its functionality. 

**Features**
* Interactive project scaffolding
* Full Graphic User Interface for managing Vue projects
* Support for Typescript, Sass, Less, Stylus preprocessing.
* ESLint and Babel pre-configured
* Unit and End-to-end testing out of the box
* Rich api, offering great extendability
* Rich collection of both official and third party plugins, integrating first class tools.

[Vue CLI Docs](https://cli.vuejs.org/)

## Poi
Poi is bundler alternative to Vue CLI, that is built on the top of Webpack. It tries to make development and bundling applications with Webpack as easy as possible.

Compared to Vue CLI, which is meant to bundle mainly Vue apps, Poi is agnostic and can work with any JavaScript framework. Similar to Vue CLI, it comes with support of Vue files, style preprocessors, JSX, asset extraction, HMR, all with little to no configuration. 

**Features**
* Out of box support for JS, CSS, File assets and more.
* Framework-agnostic, with support for JSX, Vue and more with no configs.
* Great extensibility via configuration api.
* Fits most web apps and npm libraries.
* Great development experience.
* Plugin support for maximum extendability.

[Poi Docs](https://poi.js.org/)

## Bili
Bili is a build tool on top of Rollup, that is meant to make bundling JavaScript libraries easier without getting in the way.

Its zero-config strategy, applies sensible defaults for popular use cases, allowing library authors to focus on developing their packages, not the build process. 

The tool offers both a command line and Node.js API, so developers are free to chose what suits their needs. It has built in ES2015+ transpilation via Buble and Babel, Typescript support, style extraction with pre and post processing for Sass, Less and Stylus along with CSS Modules.

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
Bundlers are complex tools that take both small and large applications, often made out of multiple packages and sub modules, returning a format that is ready to work in the browser environment.
 
Depending on the intended use case, each bundler has its strengths and weaknesses, which we will outline in the list below.

## Webpack
Webpack is the most popular tool for bundling complex web applications. It boasts a widely configurable API, an enormous plugin ecosystem, constantly growing community and more. It is used by the top three JavaScript frameworks as a bundler of choice for websites made with them.

**Useful Links**

## Rollup
Rollup is a module bundler, that is more catered towards building libraries, rather than websites. Its purpose is to compile small pieces of code, preferably ES Modules, into larger and more complex applications and libraries. It works best with the ES6 version of JavaScript modules, is it offers a superior API, transforming older formats like CommonJS and AMD to it via plugins. 

The bundler is used to package some of the most popular JavaScript tools and frameworks, including Vue itself.

Rollup has both a command line and Node.js based API, Babel and Buble support, Tree-Shaking, a big list of configuration options, most of which have defaults that are suitable for the majority of libraries.

[Rollup Docs](https://rollupjs.org/guide/en)

## Parcel

[Building Vue.js Apps with Parcel](https://alligator.io/vuejs/vue-parceljs/)
[Using Parcel In A Vue.js App](https://scotch.io/tutorials/using-parcel-in-a-vuejs-app)

## Brunch

[Vue.js + Brunch: The Webpack Alternative You've Been Hungry For](https://vuejsdevelopers.com/2017/08/20/vue-js-brunch/)
