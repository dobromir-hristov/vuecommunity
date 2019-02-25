# Server Side Rendering

Server side rendering can be explained as moving the process of rendering pages of an SPA from the client's browser to the server. This process is similar to what we used to do a few years ago, where we had server side languages like PHP, Java, Python render the page and return an HTML response.

The difference is, that once the page gets loaded by the client's browser, the JavaScript framework, Vue in our case, takes over the application's routing and rendering processes, giving the impression of a faster navigation and smoother experience.

#### Useful Resources

* [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8) - a very well written explanation of the benefits of SSR, from the Wallmart developer team.
* [What’s Server Side Rendering and do I need it?](https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38)
* [When to use Server-Side Rendering (SSR) in Vue.js projects](https://codeburst.io/when-to-use-server-side-rendering-ssr-in-vue-js-projects-697bd925d57b)
* [What is React Server Side Rendering and should I use it?](https://dev.to/mladenstojanovic/what-is-react-server-side-rendering-and-should-i-use-it-5b7i) - For React, by the concepts are the same.

## Benefits of SSR

Server side rendering solves a few of the most annoying problems of Single-page applications:

### SEO friendly 

Most crawlers cannot scan websites that are rendered with JavaScript, resulting search engines registering empty pages without content. This directly leads to bad search engine ranking. 

With SSR, pages are returned as fully rendered HTML by the server, allowing for crawlers to scan at will.

### Fast load on slower devices

Applications with allot of initial rendering, may cause slower devices to struggle. This is a real problem, as the general population is not carrying cutting edge mobile devices. 

With SSR, the page is fully rendered on the server, eliminating that initial burden for lower end devices. When paired with some other optimisation techniques, like code splitting, pages can load marginally faster.

### Social Presence

When sharing your website on various social media, they will show a small preview and extract metadata from it. Normal SPA applications are very poor at this and often result in blank pages with little to no metadata. Social media crawlers cant really parse JavaScript, so they dont know what to do with SPAs.

With SSR, pages are displayed with nice previews, as both the page content it self and meta tag data is present, allowing for social media crawlers to extract what they need.

### Faster initial interaction

Even though the browser still needs to download and run the whole JavaScript bundle, because the page is already rendered, the user can actually start browsing at that point. This can directly result in a lower drop-off ratio, as users hate waiting.

### Removes white page flicker

This is not as big of a deal, but because the page does not need to be rendered on the client, there will not be a white flicker while the page is being being rendered. This can however be easily mitigated with a loading screen or something similar. 

## Problems with SSR

Even though SSR sounds awesome, there are some things that need to be taken in consideration.

### Time to interaction

Even though they can see the website, it does'nt meant it is working. For very dynamic websites, with allot of JavaScript logic driving the UI, this can lead to weird situations where the page is rendered, looks ready, but the app bundle is still downloading, so no JavaScript logic can be executed yet.

### Time to first bite (TTFB) is slower

Because the server has to actually do the rendering, fetch async data and so on, the time it takes for the response to hit the browser is bigger.

### Server costs

Because there is usually a live Node.js instance always on, waiting to render a request, server costs are higher than static file hosting.

Check the [Hosting page](./hosting.md#server-rendered-websites) for more info.

### Server Load

This is directly related to the above. Server load is higher while pages are being rendered, sometimes blocking other operations until the process is done.

### Window not available

Because the app is rendered in server environment, there is no `window` object. This means libraries like sliders and carousels may not work, and will throw errors during render. 

To overcome this, try not to touch the `window` object, in places, that are called during serve rendering. With sliders and carousels, you could delay their rendering to after the client receives the page, so it gets rendered on the browser.

### Complex to transform deployed SPA to SSR

Because of the above, already deployed websites are harder to transform to SSR, as there might be allot of plugins or UI components, that rely on the `window` object.

## Available options for Vue

:::tip
This part of the page is still in development and could use some help.
:::

Thankfully, there are a few options already for Vue when it comes to server-side rendering.

## Nuxt

[Nuxt](https://nuxtjs.org/) is a framework on top of Vue for creating universal applications. It offers a fully setup SSR environment, with an extendable API.

If you are searching for a well tested solution, with a large community and nice development experience, Nuxt is most probably what you should pick.

Learn more about it on the [Nuxt](./nuxt.md) page.

## Ream

[Ream](https://ream.js.org/) is a lighter framework for building server-rendered applications using Vue. Opposed to Nuxt, Ream is more lower level oriented, meaning it does not rely so much on conventions, but rather lets the user choose how to configure their app.

If you need more freedom to configure your application, with little to no interference from the SSR framework, Ream may be your choice.

## Vue server renderer

Vue server renderer is a lower level tool that is used by most of the above mentioned frameworks to render Vue apps on the server.

You can use it in tandem with an Express server or similar solution, to render pages on each user visit to the app. Just keep in mind, you will have to write allot more boilerplate and configuration by yourself, compared to the already pre-made solutions.

If you dont need some really custom solution, we would advise you to pick one of the pre-made tools mentioned above.

#### Useful Resources

* [Official Vue.js Server Side Rendering Docs](https://ssr.vuejs.org/)
* [Basic Server Side Rendering with Vue.js and Express](https://alligator.io/vuejs/basic-ssr/)
* [VueJs: Server Side Render with Vue-router](https://medium.com/frontend-fun/vuejs-server-side-render-with-vue-router-e73d51699873)
