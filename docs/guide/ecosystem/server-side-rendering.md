# Server Side Rendering

Server side rendering can be explained as moving the process of rendering pages of an SPA from the client's browser to the server on **initial page request**. This process is similar to what we used to do a few years ago, where we had server side languages like PHP, Java, Python render the page and return an HTML response.

The difference is, that the server renders the page only on first page visit, once the page gets loaded by the client's browser, the JavaScript framework, Vue in our case, takes over the application's routing and rendering processes, giving the impression of a faster navigation and smoother experience.

<useful-links>
<useful-links-section title="Tutorials">

* [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8) <badge>Good read</badge>
* [What’s Server Side Rendering and do I need it?](https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38)
* [When to use Server-Side Rendering (SSR) in Vue.js projects](https://codeburst.io/when-to-use-server-side-rendering-ssr-in-vue-js-projects-697bd925d57b)
* [What is React Server Side Rendering and should I use it?](https://dev.to/mladenstojanovic/what-is-react-server-side-rendering-and-should-i-use-it-5b7i) - For React, by the concepts are the same.

</useful-links-section>
</useful-links>

## Benefits of Server Side Rendering (SSR)

Server side rendering solves a few of the most annoying problems of single-page applications:

### SEO friendly 

Most crawlers cannot scan websites that are rendered with JavaScript, resulting search engines registering empty pages without content. This directly leads to bad search engine ranking. 

**Note:** Google can actually parse and crawl JavaScript rendered websites, but this still does not guarantee good ranking. They also use an older version of Chrome to render the pages, which can lead to errors if code is not transpiled to support older browsers. 

With SSR, pages are returned as fully rendered HTML by the server, allowing for crawlers to scan at will.

### Fast load on slower devices

Heavy applications that require lots of resources for the initial rendering, may cause slower or older devices to struggle. This is a real problem, as the average user doesn't have the latest cutting edge mobile device. 

With SSR, the page is fully rendered on the server, eliminating that initial burden for lower end devices. When paired with some other optimisation techniques, like code splitting, pages can load much faster.

### Social Presence

When sharing your website on various social media, they will show a small preview and extract metadata from it. Normal SPA applications are very poor at this and often result in blank pages with little to no metadata. Social media crawlers cant really parse JavaScript, so they dont know what to do with SPAs.

With SSR, pages are displayed with nice previews, as both the page content it self and meta tag data is present, allowing for social media crawlers to extract what they need.

### Time To First Paint (TTFP)

Pages will be rendered faster when using SSR, as the browser does not need to download the whole JavaScript bundle to start rendering. This does not however mean a fully functioning website. 

<useful-links>
<useful-links-section title="Internal Pages">

[Problems with SSR - Time to interaction](#time-to-interaction) - for more info.

</useful-links-section>
</useful-links>

## Problems with SSR

SSR sounds awesome, there are however some things that need to be taken in consideration.

### Time to interaction

Even though users can see the website, it doesn't meant it is fully working. For very dynamic websites, with allot of JavaScript logic driving the UI, this can lead to weird situations where the page is rendered, looks ready, but the app bundle is still downloading, so no JavaScript logic can be executed yet.

### Time to first byte (TTFB) is slower

Because the server has to actually do the rendering, fetch async data and so on, the time it takes for the response to hit the browser is bigger.

### Server costs

Because there is usually a live Node.js instance always on, waiting to render a request, server costs are higher than static file hosting.

<useful-links>
<useful-links-section title="Internal Pages">

[Hosting page](./hosting.md#server-rendered-websites) - for more info.

</useful-links-section>
</useful-links>

### Server Load

This is directly related to the above. Server load is higher on initial request, while pages are being rendered, sometimes blocking other operations until the process is done.

### Platform specific APIs are not available

Because the app is rendered in server environment, there are specific APIs that are not available, like the `window` object. This means libraries like sliders and carousels may not work, and will throw errors during render. 

To overcome this, developers should not interact with those APIs, in places, that are being called during server rendering. Their usage should be moved to lifecycle hooks like `mounted`, where the browser environment is present.
 
 With sliders and carousels, you could delay their rendering to after the client receives the page, so it gets rendered on the browser.
 
<useful-links>
<useful-links-section title="Tutorials">
 
* [The guide to write universal, SSR-ready Vue components](https://blog.lichter.io/posts/the-guide-to-write-universal-ssr-ready-vue-compon/#window%2C-document%2C-and-friends---platform-specific-apis)

</useful-links-section>
</useful-links>

### Complex to transform deployed SPA to SSR

Because of the above, already deployed websites are harder to transform to SSR, as there might be allot of plugins or UI components, that rely on the Platform Specific APIs, explained above.

This is an issue mostly related with library and plugin authors not providing SSR compliant versions of their software.

There are ways around this, like using the `no-ssr` component helpers, which delay rendering of components to the browser. This means that the component tag will be returned in the initial html response and not its rendered template. This might be problematic for components with SEO heavy content.

## Available options for Vue

:::tip
This part of the page is still in development and could use some help.
:::

Thankfully, there are a few options already for Vue when it comes to server-side rendering.

## Nuxt <badge text="popular"/>

[Nuxt](https://nuxtjs.org/) is a framework on top of Vue for creating universal applications. It offers a full SSR environment, with an extendable API, out of the box.

If you are searching for a well tested solution, with a large community and nice development experience, Nuxt is most probably what you should pick.

Learn more about it on the dedicated [Nuxt](./nuxt.md) page.

## Servue
[Servue](https://futureaus.github.io/servue/) shares a similar scope to Nuxtjs, it allows you to render `.vue` files into rendered html. It includes features for head meta tag management, layouts and more. Servue is more suitable for Multi-page-applications using existing server-side routing systems such as koa/koa-router or express.js

## Ream

[Ream](https://ream.js.org/) is a lighter framework for building server-rendered applications using Vue. Opposed to Nuxt, Ream is more lower level oriented, meaning it does not rely so much on conventions, but rather lets the user choose how to configure their app.

If you need more freedom to configure your application, with little to no interference from the SSR framework, Ream may be your choice.

## Vue Server Renderer

Vue server renderer is a lower level tool that is used by most of the above mentioned frameworks to render Vue apps on the server.

You can use it in tandem with an Express server or similar solution, to render pages on each user visit to the app. Just keep in mind, you will have to write allot more boilerplate and configuration by yourself, compared to the already pre-made solutions.

If you dont need some really custom solution, we would advise you to pick one of the pre-made tools mentioned above.

<useful-links>
<useful-links-section title="Official">

* [SSR Docs](https://ssr.vuejs.org/)

</useful-links-section>
<useful-links-section title="Tutorials">

* [Basic Server Side Rendering with Vue.js and Express](https://alligator.io/vuejs/basic-ssr/)
* [VueJs: Server Side Render with Vue-router](https://medium.com/frontend-fun/vuejs-server-side-render-with-vue-router-e73d51699873)

</useful-links-section>
</useful-links>
