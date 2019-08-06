# Editors and Tools

Choosing a proper tool for the job is always hard. Thankfully Vue's popularity has grown enough for many major code editors and tools to offer very good support for its syntax specifics and `.vue` files.

## Editors 

You don't need a special editor to develop Vue applications. Vue apps are written in plain JavaScript, any code editor would do the job. However if you want to benefit from more advanced features like syntax highlighting, especially in `.vue` files, code completion, snippets and hints, then you will need an editor with dedicated Vue support.

The list below shows the top most popular choices with more details later on why you would chose one over the other.

### Best Code Editors (TLDR)

<useful-links>
<useful-links-section title="Editors">

- [VSCode](#vscode) - fast, versatile, plugin rich, very popular, free. 
- [WebStorm](#webstormphpstorm-jetbrains-ides) - fully featured IDE, heavy, premium.
- [CodeSandbox](#codesandbox) - in-browser, cloud based, free. 

</useful-links-section>
</useful-links>

### VSCode <badge text="Hottest"/>

There is no doubt that VSCode has gained an enormous adoption in the development scene and for good reasons. It is not only highly customisable, with a large selection of plugins, bit it also has support for a wide range of languages, and it is also **free**.

Out of the box, VSCode comes pretty bare bones with all the basic JS, TS and HTML editing tools, so to enable proper Vue support, you will need to install a plugin called `Vetur`. It gives you smart code completion and suggestions, syntax highlighting, type hinting, linting, code snippets and much more. It supports TS, JS, Stylus pretty well, with others to follow soon. You may also install a set of snippets to reduce typing the same boilerplate.

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

CodeSandbox is the only online, cloud based code editor, that supports Vue's SFC format, among many other frameworks and popular client apps and server setups. Vue projects are built with Vue CLI, giving you a well known folder structure to extend upon. 

Based on VSCode, CodeSandbox has a similar look and feel. When you create a Vue project, you will benefit from code completion, hinting, syntax highlighting and more. It even allows you to connect a sandbox to a Github repo and commit to it on each change. Apart from Vue CLI, they have templates for [Vuepress](../ecosystem/documentation.md#vuepress) and [Nuxt](../ecosystem/nuxt.md), just to name a few.                      

CodeSandbox has a very generous freemium policy with 50 active sandboxes (projects) absolutely free.

<useful-links>
<useful-links-section title="Useful Links">

- [Official Website](https://codesandbox.net)

</useful-links-section>
</useful-links>

### Atom

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


### Prettier

