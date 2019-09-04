# Desktop Apps

Vue is not limited to just developing web and [native mobile](./mobile-apps.md) applications, it allows building desktop apps as well. Here are some important reasons why one would choose Vue over a native language solution:

- **cross-platform**: all applications are developed with JavaScript, and can be packaged for Windows/MacOS/Linux;
- **easy to build**: frameworks allow you to simply develop a web application and then 'convert' it to a desktop one using a packager;
- **community**: if you maintain an open-source desktop project, you will more likely find contributors for it.

There are however some downsides, common for all JavaScript-powered desktop applications. They tend to have big package size (at least 30 MB) and are know to have heavy RAM usage.

There are mainly two ways to build a desktop application with Vue: HTML+CSS-based solutions or native GUI. First one is represented by Electron and NW.js, and the second is Vuido.

## Electron

[Electron](https://electronjs.org/) is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining [Chromium](http://www.chromium.org/) and [Node.js](https://nodejs.org/en/) into a single runtime and apps can be packaged for Mac, Windows, and Linux

Electron is by far the most popular library for writing JavaScript desktop applications today. Some of the more well-known apps are [Slack](https://slack.com/) and [Discord](https://discordapp.com/) messengers, [Atom](https://atom.io/) code editor and [Visual Studio Code](https://code.visualstudio.com/) IDE.

::: tip Pros

- easy to start with
- good development documentation
- no need to change existing source code
- has [Vue CLI plugin](https://github.com/nklayman/vue-cli-plugin-electron-builder)
- mature developer community

:::

::: danger Cons

- big package size
- high memory usage
- unprotected source code in package

:::

<useful-links>
<useful-links-section title="Tutorials">

- [Vue.js & Electron: The easy way](https://medium.com/@mikeal/vue-js-electron-the-easy-way-adc3ca09234a)
- [Building a Desktop App with Vue: Electron](https://dev.to/vuevixens/building-a-desktop-app-with-vue-electron-3pl)

</useful-links-section>
</useful-links>

## NW.js

[NW.js](https://nwjs.io/) (previously known as node-webkit) is a framework for building desktop applications with HTML, CSS, and JavaScript. Similar to [Electron](#electron), it is based on Chromium and Node.js. NW.js lets you call Node.js code and modules directly from browser, along with using Web technologies in your app. Further, you can easily package a web application to a native application.

::: tip Pros

- easy to start with
- no need to change an existing source code
- compiling to protected binaries
- has [Vue CLI plugin](https://github.com/NataliaTepluhina/vue-cli-plugin-nwjs)
:::

::: danger Cons

- big package size
- high memory usage
- significantly less used than Electron
:::

<useful-links>
<useful-links-section title="Boilerplate">

- [NW.js + Vue-CLI](https://github.com/nwutils/nw-vue-cli-example)

</useful-links-section>
<useful-links-section title="Tutorials">

- [Building a Desktop App with Vue: NW.js](https://dev.to/vuevixens/building-a-desktop-app-with-vue-nwjs-1f9e)
- [Reducing app distribution size in NW.js](https://dev.to/thejaredwilcurt/reducing-app-distribution-size-in-nwjs-3d5f)

</useful-links-section>
</useful-links>

## Electron VS NW.js

Electron and NW.js share many features: they are both built on top of Chromium and Node.js and use HTML, CSS and JS for building desktop apps. They also have some notable differences:

- In NW.js the main entry point of an application is a web page or a JS script. You specify this entry via `package.json` `main` property. In Electron, the entry point is a JavaScript script. Instead of providing a URL directly, you manually create a browser window and load an HTML file using the API.
- During the build process NW.js builds the whole Chromium; Electron uses [libchromiumcontent](https://github.com/electron/libchromiumcontent) to access Chromium's Content API
- NW.js has [built-in support](http://docs.nwjs.io/en/latest/For%20Users/Advanced/Protect%20JavaScript%20Source%20Code/) for compiling your source code to protected binaries. Electron is packaging its applications with [asar](https://github.com/electron/asar), which contains the applications' unprotected source code.

## Quasar Framework

[Quasar Framework](https://quasar.dev) is a framework which allows for cross-platform application development. Design your apps with a large library of VueJS components, then use Quasar's powerful yet simple to use CLI to automatically build your app for the Desktop via Electron. If you are looking to do more with your code than only Electron apps, then Quasar is an excellent solution for your cross-platform application ideas.   

<useful-links>
<useful-links-section title="Official">

* [Quasar repositories](https://github.com/quasarframework) 
* [Quasar documentation](https://quasar.dev)
* [Quasar Electron documentation](https://quasar.dev/quasar-cli/developing-electron-apps/introduction)
* [Quasar chat on Discord](https://chat.quasar.dev)
* [Forum](https://forum.quasar.dev)

</useful-links-section>
</useful-links>

## Vuido

[Vuido](https://vuido.mimec.org/) is a framework for creating native desktop applications based on Vue.js. Applications using Vuido can run on Windows, OS X and Linux, using native GUI components.

Under the hood, Vuido uses the [libui](https://github.com/andlabs/libui) library which provides native GUI components for each desktop platform, and the [libui-node](https://github.com/parro-it/libui-node) bindings for Node.js.

The core difference between Vuido and Electron or NW.js is that you're not going to use HTML tags or CSS styles with Vuido, you are limited to a predefined set of UI components, that the OS platforms provide.

::: tip Pros

- easy to build
- provides small package size compared to Electron or NW.js apps
- well-documented
:::

::: danger Cons

- appearance is limited to OS native GUI components
- doesn't have a Vue CLI plugin, only Vue CLI 2 boilerplate

:::

<useful-links>
<useful-links-section title="Tutorials">

- [Vue CLI 2 Vuido boilerplate](https://github.com/mimecorg/vuido-webpack-template)
- [Native desktop applications using Vue.js](https://codeburst.io/native-desktop-applications-using-vue-js-964e841e3c1d)
- [Building a Desktop App with Vue: Vuido](https://dev.to/vuevixens/building-a-desktop-app-with-vue-vuido-490n)

</useful-links-section>
</useful-links>
