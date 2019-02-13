# Mobile Apps
::: tip
This page is still in early development. If you feel you can contribute, please dont hesitate to open a PR.
:::

Building mobile applications with JavaScript is not a new thing and has been around for quite some time now. The advantages over native solutions, built with Swift or Android is that you could apply what you know about building web apps, and leverage some of the thousands of packages on npm.

On this page, we will go through the different ways one can build a mobile app with Vue, and the pros and cons behind each.

**Useful Links**
* [Hybrid Apps vs. Native Apps: Which Should You Build?](https://themanifest.com/app-development/hybrid-apps-vs-native-apps-which-should-you-build)
* [10 Best Vue.js based UI Frameworks for Building Mobile Apps](https://superdevresources.com/vuejs-mobile-frameworks/)

## Compile to Native
These are applications that are written in JavaScript by using a predefined set of custom UI components. During build time, the code then gets transformed to native for each required platform.

The benefit of using such applications is that you can use your existing JavaScript knowledge to build truly native apps that can look and feel native. Components made in Native code can also be integrated with such apps.

**Pros:** 
* Builds to Native platform code
* Performant
* Direct access to native APIs
* Allows for using already existing platform UI components
* Apps can look and feel truly native

**Cons:**
* Cannot use HTML, only provided XML-like components
* Need to use different components for each platform

### Weex
[Weex](https://weex.apache.org) was the first native solution for Vue.js. The framework was written by developers of top Chinese companies and fully supports Vue components. It promises a build once ship everywhere methodology, opposed to other similar solutions. 

It has a CLI tool, official UI theme and a set of plugins.

#### Compared to others
* It is developed and used mostly in China, so it may be a con for someone.
* Not enough learning material in English, besides official docs.

**Useful Links**
* [Native Mobile Apps with Weex and VueJS 2.0](https://hackernoon.com/how-to-create-a-weex-vue2-project-6b94981bee4e)
* [Native Mobile Apps with Vue.js and Weex: Getting Started](https://alligator.io/vuejs/getting-started-vue-weex/)
* [Native apps with Vue.js: Weex or NativeScript? — chapter I](https://hackernoon.com/native-apps-with-vue-js-weex-or-nativescript-8d8f0bac041d)
* [Native apps with Vue.js: Weex or NativeScript? — chapter II](https://hackernoon.com/native-apps-with-vue-js-weex-or-nativescript-chapter-ii-6d1776da090d)

### Vue-NativeScript

[Vue-NativeScript](https://www.nativescript.org/vue) 

#### Compared to others

**Useful Links**
* [Lessons Learned on Writing Apps with NativeScript VueJS](https://medium.com/learning-lab/lessons-learned-on-writing-apps-with-nativescript-vuejs-bd6a3066f0cb)
* [Getting Started with building Mobile Apps with NativeScript and Vue.js](https://www.vuejsradar.com/getting-started-with-building-mobile-apps-with-nativescript-and-vuejs/)

### Vue-Native

Vue Native is a mobile framework made for building native mobile apps using Vue.js. It acts as a wrapper around **React Native** APIs, which allows you to use Vue.js and compose rich mobile User Interfaces. For APIs that React Native does not support, you have to write **"bridges"** in the platform's native code or install external plugins. 

**Useful Links**
* [Vue-Native docs](https://vue-native.io/docs/)
* [How to Setup, Build and Deploy Native Apps with Vue](https://scotch.io/tutorials/how-to-setup-build-and-deploy-native-apps-with-vue)

## Progressive Web Applications

Description
Pros
Cons
Examples of popular apps that use PWA
Links to tutorials
List popular ways to generate PWA with Vue - Gridsome and Vuepress give PWA support.

## Hybrid Apps

Hybrid apps are built by reusing already establishes knowledge about making websites using HTML, CSS and JavaScript with a minimal extra learning curve. SPA's can be converted to mobile apps with a tool called Cordova. It acts as a wrapper around your web app by providing access to device hardware and functions via a unified JavaScript API. It allows developers to write one code that can run on all platforms.

**Pros:**
* Uses plain HTML, CSS and JavaScript
* Build once, run everywhere
* Can be fully custom styled with CSS
* Wide range of Established UI libraries
* Cheaper to create than Native

**Cons:**
* Generally slower than Native apps
* Access to lower level device APIs is dependent on wrapper (Cordova)
* Platform inconsistencies

**Useful Links**


## Mobile UI libraries

Description. When to use
Pros
Cons
Links

### Quasar

Intro.
Why use.
Pros Cons

### Framework 7

### Onsen UI

### Mint UI

### Ionic Vue
