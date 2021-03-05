# Static Site Generators

Static site generators are tools that allow Single-page applications to be pre-rendered as HTML files before being deployed to the server. This allows for near instant page load times, no flash of unstyled content, improved SEO and more.

 The process in first glance is similar to SSR, with the difference that instead of a node script generating each page, we have have a headless browser, loading app routes and saving the result as static HTML files. This allows you to get almost all the advantages of SSR, without the disadvantages. Websites can then be served with any [static-file-hosting](./hosting.md#static-file-hosting) solution, like Github pages or Netlify. Most websites can benefit from pre-rendering without the need for SSR.

Pre-rendering is not a silver bullet and has some caveats:
 
* Many routes - Pre-rendering is not suitable for websites with thousands of routes. Each page would have to be rendered, which can take quite some time.
* Dynamic Content - Routes that display user specific content or other dynamically fetched data, should show placeholders until the content is loaded.

## Summary (TLDR)

<useful-links>
<useful-links-section title="Markdown Based">

[Vuepress](#vuepress) - uses markdown and Vue components to build docs, blogs and more

</useful-links-section>
<useful-links-section title="Markdown Based +">

[Saber](#saber) - uses markdown, Vue components and JS files. Options for view layer.

</useful-links-section>
<useful-links-section title="Customizable">

[Nuxt](#nuxt-static-generated-mode) - statically pre-render any SSR compliant SPA, very flexible

</useful-links-section>
<useful-links-section title="GraphQL based">

[Gridsome](#gridsome) - static websites with flexible GraphQL data layer for any backend

</useful-links-section>
<useful-links-section title="Manual">

[Prerender SPA Plugin](#prerender-spa-plugin) - low-level prerendering plugin

</useful-links-section>
<useful-links-section title="Webpack + Plugin">

[Poi + vue-static](#poi-+-vue-static) - leverage pre-rendering for each route at build time

</useful-links-section>
</useful-links>
 
## Existing Solutions

Even though you can create such a tool with Puppeteer and a simple script, there are already battle tested solutions that can work for the majority of use cases.

## Vuepress <badge text="popular"/>

Vuepress is a prime example of a static file generator. Each page is a markdown file that is then rendered to an HTML page, and runs as an SPA once a page is loaded. Vuepress 0.x websites are meant mainly for documentations, as the default theme is optimized for such. 

The new 1.x version will be a more generic static file generator, suitable for building blogs and more. Its new plugin based system allows for a much wider range of extensions, on top of the already available offline mode, Algolia search integration to name a few.

<useful-links>
<useful-links-section title="Useful Links">

* [Official Docs](https://vuepress.vuejs.org/guide/#how-it-works)
* [Documentation Platforms](./documentation.md#vuepress) - Vuepress as a documentation platform.
* [Vuepress.gallery](https://vuepress.gallery/) - A gallery of Vuepress themes.

</useful-links-section>
<useful-links-section title="Tutorials">

* [The VuePress Book](https://vuepressbook.com/) - examples and demo code 
* [Vue-Powered Docs & Blog](https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation)
* [Build A Documentation System with Vue and VuePress](https://scotch.io/tutorials/zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress)

</useful-links-section>
</useful-links>

## Gridsome <badge text="rising star"/>

Gridsome is a Vue.js-powered, static site generator for building fast websites. It works with any Headless CMS, API or Database by using a GraphQL Data Layer. Once visited, Vue.js hydrates the page, converting it into a full blown SPA.

To learn more, go check out the [Gridsome](./gridsome.md) page.

<useful-links>
<useful-links-section title="Official">

* [Gridsome documentation](https://gridsome.org/)
* [Gridsome repository](https://github.com/gridsome/gridsome)
* [Gridsome chat on Discord](https://discord.gg/daeay6n)

</useful-links-section>
<useful-links-section title="Tutorials">

* [How does Gridsome compare to Nuxt?](https://github.com/gridsome/gridsome/issues/193)
* [Getting Started with Gridsome](https://scotch.io/tutorials/getting-started-with-gridsome)
* [Leveraging Vue.js & GraphQL with Gridsome](https://snipcart.com/blog/vuejs-graphql-airtable-example)
* [Building a blog with Gridsome: Creating the Blog](https://alligator.io/vuejs/gridsome-blog/)

</useful-links-section>
</useful-links>

## Prerender SPA Plugin

A webpack plugin that is used to generate static HTML files for each web page, defined in its configuration. Opposed to the previous two solutions, this one is framework agnostic, meaning it is not limited to just Vue powered websites. 

<useful-links>
<useful-links-section title="Useful Links">

* [GitHub](https://github.com/chrisvfritz/prerender-spa-plugin)
* [Vue CLI Plugin](https://github.com/SolarLiner/vue-cli-plugin-prerender-spa)

</useful-links-section>
<useful-links-section title="Tutorials">

* [How to Pre-render Vue.js Powered Websites with Webpack](https://markus.oberlehner.net/blog/how-to-pre-render-vue-powered-websites-with-webpack/)

</useful-links-section>
</useful-links>

## Nuxt Static Generated mode <badge text="popular"/>
Most people know Nuxt for its Server-side rendering capabilities, it however also supports pre-rendering. The `nuxt generate` command will save the output of each page in your Nuxt app to an HTML file. After visiting, the page will go into SPA mode, with Vue taking over routing and page rendering.

<useful-links>
<useful-links-section title="Tutorials">

* [Static Sites Powered By Nuxt and AWS](https://dev.to/smitjel/static-sites-powered-by-nuxt-and-aws-2hp7)
* [Nuxt docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

</useful-links-section>
</useful-links>

### NuxtPress <badge text="newcomer"/>

NuxtPress is an addon for [Nuxt](#nuxt-static-generated-mode) (thus it also supports pre-rendering) which adds the ability to create Nuxt pages as `.md` files.

There currently exist 3 modes: `docs`, `blog` & `slides` (experimental) and so it is already quite versatile.

Since it's just a Nuxt module, one major benefit is that you have all the power and flexibility of vanilla Nuxt (and its ecosystem) at your fingertips.

<useful-links>
<useful-links-section title="Official">

* [NuxtPress documentation](https://nuxt.press/en/guide/)
* [NuxtPress repository](https://github.com/nuxt/press)

</useful-links-section>

<useful-links-section title="Articles">

* [The story of NuxtPress](https://hire.jonasgalvez.com.br/2019/aug/19/the-story-of-nuxtpress/)

</useful-links-section>
</useful-links>

## Poi + vue-static

Using the vue-static plugin for Poi by EGOIST, you can leverage pre-rendering for each route of your SPA at build time. You need to give it a map of your dynamic routes and it will do the rest. Keep in mind it uses vue-server-renderer, so all limitations of SSR will apply here as well (no window object so on). 

This approach is useful for simpler applications, which when bundled with Poi, can get pre-rendering almost for free.

<useful-links>
<useful-links-section title="Official">

[Poi Docs](https://poi.js.org/guide/plugin-vue-static.html#install)

</useful-links-section>
</useful-links>

## Saber

Saber.js is a framework for building Modern Static Websites, also built by EGOIST. You can think of it as Gridsome or Gatsby but without the GraphQL part. It is very easy to get started with, like Nuxt.js it uses file-system as the routing API and it supports `.md` and `.vue` pages out of the box, however you can also add pages programmatically. Saber has first-class support for blogging, theming, i18n and page transition, it's also highly extensible thanks to the plugin system.

For now Saber only works with Vue.js, but React support is planned for the future.

<useful-links>
<useful-links-section title="Official">

[Saber Docs](https://saber.land)

</useful-links-section>
</useful-links>
