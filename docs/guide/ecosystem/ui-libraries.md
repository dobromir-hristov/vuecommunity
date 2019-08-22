# UI libraries

_"Which UI library is the best"_ stands among the most common questions from newcomers to Vue.js ecosystem. The answer isn't easy though, since there is no such thing as "the best" components library for Vue, due to many factors that should be considered. What you can look for instead is a solution optimal for your specific use case.

Most of the libraries covered in this chapter are based on either Material Design or Ant Design, or provide Vue integrations for some framework agnostic UI libraries, such as Bootstrap, Bulma or Uikit.

<useful-links>
<useful-links-section title="Tutorials">

[Roundup: Vue.js Desktop Web App Component Libraries](https://alligator.io/vuejs/roundup-desktop-components)

</useful-links-section>
</useful-links>

## Summary (TLDR)

If you don't have time to read all of this and just need a quick answer:

<useful-links>
<useful-links-section title="Users choice">

[Vuetify](#vuetify) - mobile and desktop ready, material design.

</useful-links-section>
<useful-links-section title="Desktop mainly">

- [Element UI](#element-ui) - extensive, desktop oriented, widely popular in asia
- [iView](#iview)

</useful-links-section>
<useful-links-section title="Easy get into">

- [Bootstrap-Vue](#bootstrap-vue) - Bootstrap based
- [Buefy](#buefy) - Bulma based

</useful-links-section>
<useful-links-section title="Most flexible">

- [Tailwind](#tailwind-css)

</useful-links-section>
</useful-links>

## How to chose an optimal UI library

This section is supposed to contain the guidelines on how to decide which UI library to use.

Here are some topics that should be covered:

- do you really need an UI library?
- how do you plan to approach mobile version of your website or application
- are you fine with a library that doesn't provide comprehensive support and large community
- what components are crucial for your project
- how important is SEO for your project, do you plan to use server side rendering?
- accessibility

## Material Design

Material Design is a very popular design concept not only in Vue.js world. Combining flat visual style with shadows and other lightning effects, it was primarily created with Android mobile applications in mind, but is widely used on traditional websites too.

The components in libraries such as [Vuetify](#vuetify) or [Vue-Material](#vue-material) look good by default, but since they were written with a certain design style in mind, they're not fully customizable. However, the new Material Design 2 specification brought more focus on flexible theming and we can expect the libraries to follow this move in 2019.

<useful-links>
<useful-links-section title="Official">

- [Material Design documentation](https://material.io/)

</useful-links-section>
</useful-links>

### Vuetify <badge text="Popular"/>

> Vuetify is a semantic component framework for Vue. It aims to provide clean, semantic and reusable components that make building your application a breeze. Build amazing applications with the power of Vue, Material Design and a massive library of beautifully crafted components and features.

Vuetify is praised not only for a wide selection of components, but also for the way it's maintained. Currently it's developed by a full team of developers and it's got big and well organized community. The project is funded via Patreon and Open Collective.

The library's ecosystem provides multiple tools, such as theme generator, Webpack loader or opinionated Eslint config. It's also easy to implement Vuetify in your application thanks to provided plugins for Vue CLI and Nuxt.

Internally, Vuetify is written with Typescript. The upcoming release of Vuetify 2 with improved theme system, accessibility and performance, will also bring the move from Stylus to SASS.

<useful-links>
<useful-links-section title="Official">

- [Vuetify repository](https://github.com/vuetifyjs/vuetify)
- [Vuetify documentation](https://vuetifyjs.com/en/)
- [Vuetify chat on Discord](https://community.vuetifyjs.com/)

</useful-links-section>
</useful-links>

### Vue Material

> Simple, lightweight and built exactly according to the Google Material Design specs.

The difference in popularity is big, but if you're looking for a library that follows Material Design principles to the letter, give it a try.

<useful-links>
<useful-links-section title="Official">

- [Vue Material repository](https://github.com/vuematerial/vue-material)
- [Vue Material documentation](https://vuematerial.io/)
- [Vue Material chat on Discord](https://discord.gg/vuematerial)

</useful-links-section>
</useful-links>

## Ant Design

Ant Design is kind of the opposite of previously mentioned Material Design. The libraries following this specification are meant to be used primarily on desktop, so their responsive design support is scarce.

The reason? Just like Material Design was created by Google, AntD is brought by designers from Alibaba - the largest e-commerce company in China. It's specifically targeted towards the Chinese web market, where traditional websites aren't usually accessed on mobile devices. Such libraries often provide separate solutions for mobile applications, based on a separate And Design Mobile specification.

This also means that they are maintained mainly by Chinese developers and it may be more difficult to get help in English.

Other than standard websites, Ant Design is a good choice for developers writing all kinds of administration systems.

<useful-links>
<useful-links-section title="Official">

- [Ant Design documentation](https://ant.design/)
- [Ant Design Vue](https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce/)

</useful-links-section>
</useful-links>

### Element UI <badge text="Popular for Desktop"/>

In the worldwide context, Element UI is the most popular UI library for Vue.js and one of the oldest in the ecosystem. It also comes with a mobile sibling - Mint UI that can be used to write a hybrid application. It's got proper English documentation and a secondary international chat, but most of the Github issues are in Chinese.

Element UI provides starter kits for both general usage and Laravel projects, as well as Typescript bindings. There's a rich choice of components available and they can be imported on demand. The styles are written using SCSS with BEM methodology.

The library's success resulted in porting Element UI to Angular and React ecosystems.

<useful-links>
<useful-links-section title="Official">

- [Element UI repository](https://github.com/ElemeFE/element)
- [Element UI documentation](https://element.eleme.io/)
- [Element UI chat on Gitter](https://gitter.im/element-en/Lobby)

</useful-links-section>
</useful-links>

### iView

While not as well-known as Element UI, Iview is a valid, well maintained alternative. It provides a large set of components which we can import on demand and useful tools to make working with them easier, together with Typescript support and the official admin panel template. It's a good choice especially if you prefer to work with LESS over SASS.

<useful-links>
<useful-links-section title="Official">

- [Iview repository](https://github.com/iview/iview)
- [Iview documentation](https://iviewui.com)

</useful-links-section>
</useful-links>

## Component sets for CSS Frameworks

Third group of UI libraries includes those that provide sets of components for traditional CSS frameworks. Both those which originally contain Javascript features, such as Bootstrap, Semantic UI or UIKit, and the purely CSS ones like Bulma. It's a good option if you're looking for some specific design style, you're already familiar with the CSS framework or you want to rewrite an already existing application that uses one of them.

Remember that you will still have to reach out to original framework's documentation and community for help, especially with styling.

### Bootstrap-Vue <badge text="Backender's Choice"/>

> Bootstrap-Vue provides one of the most comprehensive implementations of Bootstrap V4.3 components and grid system available for Vue.js 2.6+, complete with extensive and automated WAI-ARIA accessibility markup.

If you want to use Bootstrap 4 for your project, Bootstrap-Vue is the community's most often recommendation. It's a set of components natively written with Vue.js, so you don't have to worry about mixing Vue with JQuery. It's easy to use it with both Vue CLI and Nuxt.

<useful-links>
<useful-links-section title="Official">

- [Bootstrap-Vue repository](https://github.com/bootstrap-vue/bootstrap-vue)
- [Bootstrap-Vue documentation](https://bootstrap-vue.js.org/)
- [Bootstrap-Vue chat on Discord](https://discordapp.com/invite/j2Mtcny)

</useful-links-section>
</useful-links>

### Buefy

Bulma grew up to be one of top CSS frameworks, but unlike most of them, it doesn't offer any Javascript functionality. That's where Buefy comes into play. It provides both a set of components and an easy way to integrate Bulma into your project.

Buefy's versions are synchronized with Bulma, so you can be sure that same versions of both frameworks are fully compatible with each other.

<useful-links>
<useful-links-section title="Official">

- [Buefy repository](https://github.com/buefy/buefy)
- [Buefy documentation](https://buefy.github.io)
- [Buefy chat on Discord](https://discordapp.com/invite/ZkdFJMr)

</useful-links-section>
</useful-links>

### Vuikit

Vuikit is a Vue integration library that provides wrappers for [Uikit](https://getuikit.com/) framework. While not as well-known in Vue.js ecosystem as Bootstrap or Bulma, Uikit is a robust library that covers a wide variety of CSS & JS components, with some unique features that you won't find elsewhere out of the box.

<useful-links>
<useful-links-section title="Official">

- [Vuikit repository](https://github.com/vuikit/vuikit)
- [Vuikit documentation](https://vuikit.js.org/)
- [UIkit chat on Gitter](https://gitter.im/uikit/uikit)

</useful-links-section>
</useful-links>

### Semantic-UI-Vue

Despite its popularity, [Semantic UI](https://semantic-ui.com/) never really hit it off in Vue.js ecosystem. There were a few projects trying to bring good integration with Vue though. Out of them, the most noteworthy is Semantic-UI-Vue, inspired by a similar project from the React ecosystem.

<useful-links>
<useful-links-section title="Official">

- [Semantic-UI-Vue repository](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue)
- [Semantic-UI-Vue documentation](https://semantic-ui-vue.github.io)
- [Semantic-UI-Vue chat on Gitter](https://gitter.im/Semantic-UI-Vue)

</useful-links-section>
</useful-links>

## Other solutions

### Tailwind CSS <badge text="Most Flexible"/>

> A utility-first CSS framework for rapidly building custom user interfaces.

Tailwind is very well accepted in the Vue community as it integrates very nicely with the concept of components. Integration is as simple as installing Tailwind and creating a config and importing it in your app.

<useful-links>
<useful-links-section title="Official">

- [Tailwind Docs](https://tailwindcss.com/docs/what-is-tailwind/)

</useful-links-section>
<useful-links-section title="Tutorials">

- [Using Tailwind with Vue.js](https://flaviocopes.com/vue-tailwind/)
- [How to use Tailwind CSS in Vue together with CSS Modules](https://stefanzweifel.io/posts/how-to-use-tailwind-css-in-vue-together-with-css-modules)

</useful-links-section>
</useful-links>

### VueSax <badge type="warning" text="In Development"/>

From all the rest of available libraries, VueSax seems to be the most promising one in terms of both features and maintainment. The goal is to create an UI library that is fully independent in terms of colors, shapes and design choices, focusing on core JS functionality.

The author doesn't recommend to use it in production yet, but for small non-commercial projects it may be worth trying out.

<useful-links>
<useful-links-section title="Official">

- [VueSax repository](https://github.com/lusaxweb/vuesax)
- [VueSax documentation](https://lusaxweb.github.io/vuesax/)
- [VueSax chat on Discord](https://discord.gg/9dsKtvB)

</useful-links-section>
</useful-links>
