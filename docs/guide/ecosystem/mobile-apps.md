# Mobile Apps
::: tip
This page is still in early development. If you feel you can contribute, please dont hesitate to open a PR.
:::

Building mobile applications with JavaScript is not a new thing and has been around for quite some time now. The advantages over native solutions, built with Swift or Android is that you could apply what you know about building web apps, and leverage some of the thousands of packages on npm.

On this page, we will go through the different ways one can build a mobile app with Vue, and the pros and cons behind each.

<useful-links>
<useful-links-section title="Tutorials">

* [Hybrid Apps vs. Native Apps: Which Should You Build?](https://themanifest.com/app-development/hybrid-apps-vs-native-apps-which-should-you-build)
* [10 Best Vue.js based UI Frameworks for Building Mobile Apps](https://superdevresources.com/vuejs-mobile-frameworks/)

</useful-links-section>
</useful-links>

## Compile to Native
These are applications that are written in JavaScript by using a predefined set of custom UI components. During build time, the code then gets transformed to native for each required platform.

The benefit of using such applications is that you can use your existing JavaScript knowledge to build truly native apps that can look and feel native. Components made in Native code can also be integrated with such apps.

::: tip Pros
* Builds to Native platform code
* Performant
* Direct access to all native APIs
* Allows usage of already existing platform UI components
* Apps can look and feel truly native
::: 

::: danger Cons
* Cannot use HTML, only provided XML-like components by framework
* Cannot use CSS to style components
* Need to use different components for each platform
:::

### Weex
[Weex](https://weex.apache.org) was the first native solution for Vue.js. The framework was written by developers of top Chinese companies and fully supports Vue components. It promises a "build once, ship everywhere" methodology, opposed to other similar solutions. 

It has a CLI tool, official UI theme and a set of plugins.

Weex has a deep integration with Vue, thus the support parity between the two is very good.

:::warning Keep in mind
* It is developed and used mostly in China, so it may be a con for someone.
* Not enough learning material in English, besides official docs.
:::

<useful-links>
<useful-links-section title="Tutorials">

* [Native Mobile Apps with Weex and VueJS 2.0](https://hackernoon.com/how-to-create-a-weex-vue2-project-6b94981bee4e)
* [Native Mobile Apps with Vue.js and Weex: Getting Started](https://alligator.io/vuejs/getting-started-vue-weex/)
* [Native apps with Vue.js: Weex or NativeScript? — chapter I](https://hackernoon.com/native-apps-with-vue-js-weex-or-nativescript-8d8f0bac041d)
* [Native apps with Vue.js: Weex or NativeScript? — chapter II](https://hackernoon.com/native-apps-with-vue-js-weex-or-nativescript-chapter-ii-6d1776da090d)

</useful-links-section>
</useful-links>

### Vue-NativeScript <badge text="Popular"/>

> NativeScript-Vue is a NativeScript plugin which allows you to use Vue.js to craft your mobile application. 

[Vue-NativeScript](https://www.nativescript.org/vue) is one of the most popular solutions for native mobile apps with Vue.

It offers excellent developer experience for building truly native mobile apps. Similar to ReactNative, as with other similar frameworks, you develop using a set of pre-built Vue components, using the existing Vue and JS knowledge. Knowledge of Native API's is required

With a vast growing popularity and community, the wide adoption of NativeScript across companies, first class support for Vue by official NativeScript team, it is a very good choice.

::: tip Pros
* Active, growing English speaking community
* First-class support by NativeScript
* Very actively developed
* Vue-Devtools support
* Cross-platform without maintaining two code bases.
:::

::: warning Keep in mind
* Routing is done manually, no Vue-Router support
* Styling is done via a constrained set of CSS rules
* Lots of examples for Angular, might need to adapt
:::

<useful-links>
<useful-links-section title="Official">

* [Documentation](https://nativescript-vue.org/en/docs/introduction/)
* [Playground Tutorial](https://nativescript-vue.org/en/docs/getting-started/playground-tutorial/)
* [Learn NativeScript-Vue the Easy Way](https://www.nativescript.org/blog/learn-nativescript-vue-the-easy-way)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Lessons Learned on Writing Apps with NativeScript VueJS](https://medium.com/learning-lab/lessons-learned-on-writing-apps-with-nativescript-vuejs-bd6a3066f0cb)
* [Getting Started with building Mobile Apps with NativeScript and Vue.js](https://www.vuejsradar.com/getting-started-with-building-mobile-apps-with-nativescript-and-vuejs/)
* [Getting Started with NativeScript-Vue 1.0](https://vuejsdevelopers.com/2018/03/05/getting-started-vue-nativescript/)
* [Native Mobile Apps with Vue.js and NativeScript](https://alligator.io/vuejs/getting-started-vue-nativescript/)

</useful-links-section>
</useful-links>

### Vue-Native

Vue Native is a mobile framework made for building native mobile apps using Vue.js. It acts as a wrapper around **React Native** APIs, which allows you to use Vue.js to compose rich mobile User Interfaces. For APIs that React Native does not support, you have to write **"bridges"** in the platform's native code or install external plugins. 

Being younger than Vue-NativeScript, it has a smaller community and adoption, but is nonetheless growing as well.

<useful-links>
<useful-links-section title="Official">

* [Vue-Native Documentation](https://vue-native.io/docs/)

</useful-links-section>
<useful-links-section title="Tutorials">

* [How to Setup, Build and Deploy Native Apps with Vue](https://scotch.io/tutorials/how-to-setup-build-and-deploy-native-apps-with-vue)
* [Vue Native Basics](https://www.youtube.com/watch?v=8e0XHPylhj0)

</useful-links-section>
</useful-links>

## Progressive Web Applications

Description
Pros
Cons
Examples of popular apps that use PWA
Links to tutorials
List popular ways to generate PWA with Vue - Gridsome and Vuepress give PWA support.

## Hybrid Apps

Hybrid apps are built by reusing already establishes knowledge about making websites using HTML, CSS and JavaScript with a minimal extra learning curve. SPA's can be converted to mobile apps with a tool called Cordova. It acts as a wrapper around your web app by providing access to device hardware and functions via a unified JavaScript API. It allows developers to write one code that can run on all platforms.

::: tip Pros
* Uses plain HTML, CSS and JavaScript
* Build once, run everywhere
* Can be fully custom styled with CSS
* Wide range of Established UI libraries
* Cheaper to create than Native
:::

::: danger Cons
* Generally slower than Native apps
* Access to lower level device APIs is dependent on wrapper (Cordova)
* Platform inconsistencies
:::

## Mobile UI libraries

These are UI frameworks that offer native mobile looking components, build for the web with Vue and CSS. These components try to mimic the look and functionality of their native counterparts as close as possible.

Most UI frameworks allow you to use the same component and swap out it's styling during the bundling phase, giving it a native look for the current mobile platform.

Some frameworks focus more towards one platform, so careful consideration must be taken, if true native look is required for each platform.

### Quasar <badge text="popular"/>

Quasar is one of the first Vue UI frameworks, targeting desktop and mobile in particular. It offers a very rich and ever extending set of pre-built components, that mimic mobile elements, plus a bunch of other useful ones. Quasar also has a CLI for managing and bundling your mobile app for each platform, using PhoneGap.

<useful-links>
<useful-links-section title="Official">

* [Documentation](https://quasar-framework.org/guide/)
* [Discord Chart server](https://discordapp.com/invite/5TDhbDg)
* [Forum](https://forum.quasar-framework.org/)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Make your Vue.js project fast, cheap and good!](https://medium.com/quasar-framework/the-quasar-method-e19daf9abb5f)

</useful-links-section>
</useful-links>

### Framework 7

### Onsen UI

### Mint UI

### Ionic Vue
