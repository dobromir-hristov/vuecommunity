# Static Site Generators

Static site generators are tools that allow Single-page applications to be pre-rendered as HTML files before being deployed to the server. This allows for near instant page load times, no flash of unstyled content, improved SEO and more.

 The process in first glance is similar to SSR, with the difference that instead of a node script generating each page, we have have a headless browser, loading app routes and saving the result as static HTML files. This allows you to get almost all the advantages of SSR, without the disadvantages. Websites can then be served with any [static-file-hosting](./hosting.md#static-file-hosting) solution, like Github pages or Netlify. Most websites can benefit from pre-rendering without the need for SSR.

Pre-rendering is not a silver bullet and has some caveats:
 
* Many routes - Pre-rendering is not suitable for websites with thousands of routes. Each page would have to be rendered, which can take quite some time.
* Dynamic Content - Routes that display user specific content or other dynamically fetched data, should show placeholders until the content is loaded.
 
## Popular Solutions

Even though you can create such a tool with Puppeteer and a simple script, there are already battle tested solutions that can work for the majority of use cases.

## Vuepress

Vuepress is a prime example of a static file generator. Each page is a markdown file that is then rendered to an HTML page, and runs as an SPA once a page is loaded. Vuepress 0.x websites are meant mainly for documentations, as the default theme is optimized for such. 

The new 1.x version will be a more generic static file generator, suitable for building blogs and more. Its new plugin based system allows for a much wider range of extensions, on top of the already available offline mode, Algolia search integration to name a few.

<useful-links>
<useful-links-section title="Useful Links">

* [Official Docs](https://vuepress.vuejs.org/guide/#how-it-works)
* [Documentation Platforms](./documentation.md#vuepress) - Vuepress as a documentation platform.
* [Vuepress.gallery](https://vuepress.gallery/) - A gallery of Vuepress themes.

</useful-links-section>
<useful-links-section title="Tutorials">

* [The VuePress Book](https://vuepressbook.com/) -  examples and demo code 
* [Vue-Powered Docs & Blog](https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation)
* [Build A Documentation System with Vue and VuePress](https://scotch.io/tutorials/zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress)

</useful-links-section>
</useful-links>

## Gridsome

Gridsome is a Vue.js-powered, static site generator for building fast websites. It works with any Headless CMS, API or Database by using a GraphQL Data Layer. Once visited, Vue.js hydrates the page, converting it into a full blown SPA.

To learn more, go check out the [Gridsome](./gridsome.md) page.

<useful-links>
<useful-links-section title="Official">

* [Gridsome documentation](https://gridsome.org/)
* [Gridsome repository](https://github.com/gridsome/gridsome)
* [Gridsome chat on Discord](https://discord.gg/daeay6n)

</useful-links-section>
<useful-links-section title="Tutorials">

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

## Nuxt Static Generated mode
Most people know Nuxt for its Server-side rendering capabilities, it however also supports pre-rendering. The `nuxt generate` command will save the output of each page in your Nuxt app to an HTML file. After visiting, the page will go into SPA mode, with Vue taking over routing and page rendering.

<useful-links>
<useful-links-section title="Tutorials">

* [Static Sites Powered By Nuxt and AWS](https://dev.to/smitjel/static-sites-powered-by-nuxt-and-aws-2hp7)
* [Nuxt docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

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
_Warning, the project is still in development and should not be used in production._

Saber.js is a framework for building Modern Static Websites, also built by EGOIST. You can think of it as a simpler alternative to Gridsome or Gatsby. It uses the file-system as the router API. Files with `.js` `.md` or `.vue` extension inside the `./pages` folder will automatically become web pages. Saber also supports themes, which are used to manage layouts.

For now Saber only works with Vue websites, but React support is planned for the future.

<useful-links>
<useful-links-section title="Official">

[Saber Docs](https://saberjs.org/)

</useful-links-section>
</useful-links>
