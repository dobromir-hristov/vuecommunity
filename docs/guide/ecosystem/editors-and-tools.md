# Editors and Tools

Choosing a proper tool for the job is always hard. Thankfully Vue's popularity has grown enough for many major code editors and tools to offer very good support for its syntax specifics and `.vue` files.

## Editors 

You don't need a special editor to develop Vue applications. Vue apps are written in plain JavaScript, any code editor would do the job. However if you want to benefit from more advanced features like syntax highlighting, especially in `.vue` files, code completion, snippets and hints, then you will need an editor with dedicated Vue support.

The list below shows the top most popular choices with more details later on why you would chose one over the other.

### Best Code Editors (TLDR)

<useful-links>
<useful-links-section title="Editors">

- [VSCode](#vscode) - fast, versatile, plugin rich, very popular, **free**. 
- [WebStorm](#webstorm-phpstorm-jetbrains-ides) - fully featured IDE, heavy, **premium**.
- [CodeSandbox](#codesandbox) - in-browser, cloud based, **free**. 

</useful-links-section>
</useful-links>

### VSCode <badge text="Hottest"/>

There is no doubt that VSCode has gained an enormous adoption in the development scene and for good reasons. It is not only highly customisable, with a large selection of plugins, bit it also has support for a wide range of languages, and it is also **free**.

Out of the box, VSCode comes pretty bare bones with all the basic JS, TS and HTML editing tools, so to enable proper Vue support, you will need to install a plugin called [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). It gives you smart code completion and suggestions, syntax highlighting, type hinting, linting, code snippets and much more. It supports TS, JS, Stylus pretty well, with others to follow soon. You may also install a set of snippets to reduce typing the same boilerplate.

Vetur is being developed closely with VSCode and Vue core teams, to ensure maximum parity.

<useful-links>
<useful-links-section title="Useful Links">

- [Official Website](https://code.visualstudio.com/)
- [Vetur Plugin](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - enable improved Vue support
- [Vue VSCode Extension Pack](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack) - collection of useful plugins for Vue app development

</useful-links-section>
</useful-links>

### WebStorm/PhpStorm (JetBrains IDEs)

If you need a fully featured IDE with all the bells and whistles, not just a code editor, WebStorm is a serious contender. Not free, JetBrains products like WebStorm and PhpStorm are feature rich IDEs, offering everything a web developer may need for their daily work. They have a free trial, free student licenses, as well as a free open beta testing program, which allows users to test JetBrains products early on.

To enable Vue support you will need to install the official, free Vue.js plugin from the plugins menu. It will give you `.vue` file support with highlighting, `template` and `script` tag code completion, linting, component hinting, prop completion, type hinting, refactoring support and much more.

As a fully featured IDE, WebStorm provides greater refactoring capabilities, improved code completion, hinting and highlighting, but at a cost of speed. It is heavy and can get choppy if you open too many files or projects at the same time.

### CodeSandbox <badge text="Rising Star"/>

CodeSandbox is the only online, cloud based code editor, that supports Vue's SFC format, among many other frameworks, popular client apps and server setups. Vue projects are built with Vue CLI, giving you a well known folder structure to extend upon. 

Based on VSCode, CodeSandbox has a similar look and feel. When you create a Vue project, you will benefit from code completion, hinting, syntax highlighting and more. It even allows you to connect a sandbox to a Github repo and commit to it on each change. Apart from Vue CLI, they have templates for [Vuepress](../ecosystem/documentation.md#vuepress) and [Nuxt](../ecosystem/nuxt.md), just to name a few.

CodeSandbox has a very generous freemium policy with 50 active sandboxes (projects) absolutely free.

<useful-links>
<useful-links-section title="Useful Links">

- [Official Website](https://codesandbox.net)

</useful-links-section>
</useful-links>

### Atom

An amazing, free, open-source code editor created by GitHub with plenty of extensions and superb user experience. With the available plugins, it supports a wide range of languages and features, including ones dedicated to Vue: smart code completion/suggestions, snippets, syntax highlighting, linting and formatting with both eslint and prettier, that works in template, script and style parts of the Vue SFC.

On top of that, Atom has great integration with GitHub when it comes to managing commits, PRs, reviewing changes and can be further extended with additional plugins. Some say its the most fashionable and good looking editor out there and the code completion is at the same time very smart (thanks to Tern.js), but also completely unintrusive. You’re the developer, you got this!

Some say, that it’s a bit slow, but that’s just a way of hinting that you should refactor your huge components.

<useful-links>
<useful-links-section title="Useful Links">

- [ternjs](https://github.com/tststs/atom-ternjs)
- [language-vue](https://github.com/hedefalk/atom-vue)
- [ide-vue](https://github.com/rwatts3/atom-ide-vue)
- [vue-fmt](https://github.com/voodeng/vue-fmt)

</useful-links-section>
</useful-links>

### SublimeText

Another very popular editor, coming close to VSCode. It is well known for its speed and lightness. Sublime has a very big library of free plugins, extensions and themes, enabling far more features, than was intended in the beginning.

Sublime has a fair Vue support, with syntax highlighting in `.vue` files coming from an official plugin from the Vue core team. Unfortunately the feature list pretty much stops there. You can download snippets as well. 

If you have to choose a light editor for Vue, we recommend VSCode.

<useful-links>
<useful-links-section title="Useful Links">

- [Vue Syntax Highlight](https://github.com/vuejs/vue-syntax-highlight)
- [Vue.js Snippets](https://packagecontrol.io/packages/Vuejs%20Snippets)

</useful-links-section>
</useful-links>

## Tools

No setup is complete without a good linter or formatter. Some editors offer their own implementations, others offer good integration with already existing tools, and third offer both. Below we will show the most popular tools, why one should use them, and how they integrate with the above editors, and with each other.

### ESLint

ESLint is a JavaScript linting utility, designed to find problematic patterns or code that does not adhere to certain style guidelines, by utilizing static analysis patterns. Its popularity has spread like wildfire and is the de facto linting tool for many of the popular frameworks like Vue and React.

[Vue.cli](../ecosystem/build-tools.md#vue-cli) offers a fully setup ESLint configuration, thanks to the incredible work by the people behind the [Vue ESLint](https://eslint.vuejs.org/) project. It is constantly being improved and worked on, offering a large set of rules, from basic Vue style guidelines, to very strict ones, keeping code as close to the [Official Vue Style Guide](https://vuejs.org/v2/style-guide/) as possible. It also allows you to pick between Standard or Airbnb code style rules.

#### How to install Vue ESLint plugin

Installation is as easy as following a few steps. There are official guides that are kept upto date.

<useful-links>
<useful-links-section title="Official Links">

 *  [Vue CLI ESLint plugin <badge text="Recommended"/>](https://cli.vuejs.org/config/#eslint) - either on project setup or later 
 *  [Vue ESLint User Guide](https://eslint.vuejs.org/user-guide/) - manually by following the official guide
 
 </useful-links-section>
 </useful-links>
 
#### How to enforce coding standards (Standard or Airbnb styles)

To have or not to have semicolons, closing brace on the same row or on the next, space after function name or not, these are all coding style related questions and are not connected with Vue in any way. 

These can be enforced by a collection of rules, also called presets or standards. Two very popular ones are [Standard](https://standardjs.com/) and [Airbnb](https://github.com/airbnb/javascript), also known as "no semicolons vs with semicolons". But they are much more than that, take a look at each respectively and decide which one suits your styles best.

 **Note:** The Vue ESLint plugin does not enforce any coding styles like Standard or Airbnb, those can be however setup via Vue CLI or manually. Vue has pre-built setups, that are meant for Vue CLI, but could be used as a guideline.
 
<useful-links>
<useful-links-section title="Vue ESLint coding styles">
 
 * [@vue/eslint-config-standard](https://github.com/vuejs/eslint-config-standard)
 * [@vue/eslint-config-airbnb](https://github.com/vuejs/eslint-config-airbnb)

</useful-links-section>
</useful-links>

#### Usage with Code Editors

Every major editor comes with ESLint support, either by an official or a community driven plugin. Follow the links to the guides below or upto date step by step instructions.

<useful-links>
<useful-links-section title="Setup ESLint with Editors">
 
 * [VSCode](https://eslint.vuejs.org/user-guide/#visual-studio-code) - Requires plugin install, easy to configure.
 * [Webstorm](https://eslint.vuejs.org/user-guide/#intellij-idea-jetbrains-webstorm) - Just enable from settings.
 * [Sublime Text](https://eslint.vuejs.org/user-guide/#sublime-text) - Requires two plugins and a bit more setup.
 * [Atom](https://eslint.vuejs.org/user-guide/#atom-editor) - Just small option change needed.

</useful-links-section>
</useful-links>
 
### Prettier

Prettier is a code formatting tool that enforces a very opinionated coding style onto many languages, among which are JavaScript, CSS and HTML. Its main benefits are that it integrates into any of the popular editors and can format code on each save of the IDE, keeping code styles the as close as possible between multiple developers.

The lack of options are actually one of its strong points. enforcing sensible defaults across the board.

#### How to use Prettier with Vue

If you just want to use prettier, you can do so by installing it and using it directly via the command line. Follow the [installation guide](https://prettier.io/docs/en/install.html) for more details.

#### Using prettier with ESLint

Prettier however does not work well with ESLint, out of the box. When used together, most often they have colliding rules between their style configurations. The problem is that, you cannot disable most of those in Prettier, as it was made to be "all or nothing" kind of thing.

The solution is to use an [ESLint plugin](https://prettier.io/docs/en/integrating-with-linters.html#eslint) to run Prettier from within ESLint. On top of that, with the help of another plugin that disables all colliding rules, ESLint can run Prettier without issues and then fix the rest when used with style standards like Standard or Airbnb.

If you are using Vue CLI, this comes out of the box, so no need to worry what plugins to install.

<useful-links>
<useful-links-section title="ESLint/Prettier links">
 
 * [Official tutorial for Prettier and ESLint](https://prettier.io/docs/en/integrating-with-linters.html#eslint)
 * [Formatting Vue.js Code with ESLint & Prettier](https://alligator.io/vuejs/vue-eslint-prettier/)

</useful-links-section>
</useful-links>

#### Integrating Prettier with Code Editors

<useful-links>
<useful-links-section title="ESLint/Prettier links">

* [Official Prettier editor integration tutorials](https://prettier.io/docs/en/editors.html)
* [How to properly set up Nuxt with ESLint and Prettier in VSCode](https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c)

</useful-links-section>
</useful-links>
