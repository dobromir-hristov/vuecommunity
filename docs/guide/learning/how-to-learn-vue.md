# How to Learn Vue

As with any technology, its best to start with the official documentation, in this case the [Vue.js Guide](https://vuejs.org/v2/guide/). The guide is a magnificent, constantly updated learning resource, which does a superb job at giving a good starting point, needed to build an application with Vue. From basic reactivity concepts and caveats, to more advanced use cases, it should be the first place to learn from.

Check out the [Official Documentation](./official-documentation.md) page on this website, to learn more about the official Vue learning resources. 

If you are a tutorial or course learner, go over the [Courses](./courses.md) and [Learning Platforms](./learning-platforms.md) pages, where we go over the best premium and free resources to learn from. If you prefer books, then the [Books](./books.md) page might be a better match.

If you want to find out how other people learn, the [Tips from Mentors](./tips-from-mentors.md) page gives a good insight into how Vue experts have started developing with Vue.


<useful-links>
<useful-links-section title="Tutorials">

* [Vue Development In 2019: What You Need To Know](https://medium.com/@anthonygore/vue-development-in-2019-what-you-need-to-know-2170942f0e54)
* [Useful Vue patterns, techniques, tips and tricks and curated helpful links.](https://translation-gang.github.io/vue-patterns/)

</useful-links-section>
<useful-links-section title="Internal Pages">

* [Official Documentation](./official-documentation.md)
* [Courses](./courses.md)
* [Learning Platforms](./learning-platforms.md)
* [Books](./books.md)
* [Tips from Mentors](./tips-from-mentors.md)

</useful-links-section>
</useful-links>

## Categorizing Applications by Technology

When beginning to develop with Vue.js, it helps to know what kind of application you will be building. This will help you outline the kind of technologies you will need to master in order to start developing with Vue.

In this section, we will go over the categories under which most websites fall under and the tech a developer needs to know to develop them with Vue. 

## Vue Enhanced Websites

Vue enhanced websites are traditional websites, rendered by a server side language, be it PHP, Node or other. 

Vue components can be used to enhance certain parts of the website, but they are not rendered on the server. As such, the HTML returned will include just the component tag, without any of its template markup. This means there will be a flash of unstyled content on each page load, until Vue loads and renders the components.

Such websites can be split into:

### Vue Enhanced Websites Without a Bundler
 
Vue can be added with a simple CDN link, components are built in plain JavaScript, with templates added to the HTML markup. 
 
This approach works for smaller websites or those that will not implement complex Vue components. The larger the websites gets and more components it requires, the less ideal this approach becomes. 

 **Minimum required technologies**
* JavaScript - ES5 or above, depending on the supported browsers.
* HTML - For the inline templates and website markup

::: tip Pros
* Dead simple to start with
* Can be added to any legacy application
* No extra knowledge except Vue itself
:::

::: danger Cons
* Larger applications tend to become harder to maintain
* Component templates live inside the HTML markup of pages, making them harder to work with.
:::

<useful-links>
<useful-links-section title="Tutorials">

* [Using vue.js in existing websites, the easy way](https://medium.com/@disjfa/using-vue-js-in-existing-websites-the-easy-way-d46cd1f0c945).

</useful-links-section>
</useful-links>

### Vue Enhanced Websites Using a Bundler

 As the approach above, routing and page rendering is handled on the server, while Vue components are built using `.vue` single file components (SFC), keeping the codebase in an easier to manage state. This approach also allows for splitting up different parts of the application into small reusable modules.
 
 In this case, a bundler like Webpack or Parcel is required, to process and transpile the code, extract assets and reusable chunks. If possible, using Vue CLI is heavily encouraged, as it takes care of configuring the whole bundling process. 
 
 This is the preferred way when building more complex web applications, that do not require a full blown SPA.

 Check the [Build Tools Page](../ecosystem/build-tools.md) for information on popular ways to bundle your code.
    
 **Minimum required technologies**
 * Vue CLI or bundler - Knowledge of how to integrate Vue CLI in the application. If not possible, basic knowledge of setting up а modern bundler process. Some frameworks have integrated solutions, like [Laravel Mix](https://laravel.com/docs/5.7/mix). 
 * Transpiler Setup - optional if using any ES2015+ features, that are not supported by older browsers. Vue CLI takes care of this as well.
 * HTML - used inside `.vue` files and the website markup.
 
::: tip Pros
 * Allows for larger and more complex applications compared to none bundler approach
 * Code splitting and other optimisations are possible with the help of tooling
 :::
 
::: danger Cons
 * Requires a pre-build step on each change of the source files
 * Requires knowledge of setting up build tools
 :::
 
<useful-links>
<useful-links-section title="Tutorials">

 * [Why should you use Vue.js when using Laravel](https://blog.pusher.com/why-vuejs-laravel/)
 * [Persist Vuex State with vuex-persist](https://alligator.io/vuejs/vuex-persist-state/)
 * [Passing data from Laravel to Vue - Props](https://medium.com/@m_ramsden/passing-data-from-laravel-to-vue-98b9d2a4bd23)
 * [Passing variable from Laravel to VueJS 2 component](https://www.spicydog.org/blog/passing-variable-laravel-vuejs-2-component/)
 
</useful-links-section>
</useful-links>
 
## SPA Websites

Single Page Applications (SPA) handle routing and page rendering with Vue.js on the client's browser. This approach allows for page navigation without refresh, resulting in smoother and generally faster feeling websites.

Because the complexity of these applications, its common to use а build process, for packaging the application, keeping components, pages and other logic in separate files, ensuring an easier to manage codebase.

If the project allows, it is strongly recommended to use the Vue CLI to build the website, as it takes care of preprocessors, transpilation and bundling altogether, otherwise a manual setup will have to be taken in consideration.

**Required technologies**
* Vue CLI - For bundling the application. If project does not allow for Vue CLI usage, a knowledge of setting up a modern bundler is required.
* Vue Router - For managing the pages and routing of the application.
* Async requests - Required for fetching data from remote resources asynchronously.
* ES2015+ - While not required, it is encouraged to use newer ECMAScript versions.

::: tip Pros
* Faster page navigation - routing and pages rendering are done on the client, so navigation can feel much faster.
* Advanced optimisations - code splitting, pre-loading and other techniques allow for serving the minimal code needed to the user.
:::

::: danger Cons
* Worse SEO - pages are rendered with JavaScript on the client, so some search engines cannot read them.
* No real 404 status code - all requests are redirected with a status **200** to a single `index.html` endpoint, as the server generally does not know what endpoints exist on the app.
:::

## Statically Generated Websites

Statically generated websites have an automatically generated static HTML file for each web page. Such applications are usually pre-built before being uploaded to the server, using dedicated site builders like [Vuepress](http://vuepress.vuejs.org/), [Gridsome](../ecosystem/gridsome.md), [Nuxt](../ecosystem/nuxt.md) or a tool like [Prerender SPA Plugin](../ecosystem/static-site-generators.md#prerender-spa-plugin).
 
Such websites are more suitable for cases, where the page content changes less frequently. In comparison, Server-side rendered websites are rendered on the server on each request, making them more suitable for highly dynamic websites.

You can read more on this topic in our [Static site generators](../ecosystem/static-site-generators.md) page.

**Required technologies**
* Everything from SPA websites
* Static website generators - need to know how to work with a static website generator.

::: tip Pros
* Improved SEO - Pages are pre-rendered as static HTML, so search engines can crawl them.
* Lower server costs - Hosting for static sites is usually much cheaper, even free compared to hosting with a dynamic server language support.
* Page load times can be near instant
:::

::: danger Cons
* Configuration - Some tooling requires complex configuration and mapping of the website's pages.
* Not suitable for highly dynamic websites
:::

## SSR SPA Websites

Server-side rendered single-page applications are taking best of both worlds and applying them for a both SEO optimized and super fast loading websites. 

Websites leverage Vue's rendering and routing, as a standard SPA. However, there is a process on the server, that renders the pages on every request, returning a fully working page with all if its content ready. After the browser receives the page, Vue kicks in and goes into SPA mode, routing and rendering the pages on the clients browser.

This whole process can be quite intimidating to setup, luckily frameworks like Nuxt make it much easier. Check out the [Server-side rendering](../ecosystem/server-side-rendering.md) page to learn about the various tools available in the Vue Ecosystem.

**Required technologies**
* SSR tool - Knowledge of how to setup server-side rendering tool or framework
* Node.js - Setting up a running Node.js server for the rendering process

::: tip Pros
* Suitable for websites with dynamic and constantly updating data
* Improved SEO as pages are rendered on the server, so crawlers can parse the provided HTML.
* The renderer knows what endpoints are available, so proper status codes are returned.
:::

::: danger Cons
* SSR caveats - There are certain caveats and issues with SSR that need to be addressed. [Server-side rendering page](../ecosystem/server-side-rendering.md) covers some of them.
* Expensive hosting - Hosting is generally more expensive as it requires a constantly running node server.
:::

## Coming from Other Technology

::: warning
This page is still in early development. If you feel you can contribute, please don't hesitate to open a PR.
:::

When coming from another technology, it is normal to compare common methods and patterns to those used in Vue.

In this section, we will go over the most popular technologies and the struggles developers have when migrating from them to Vue.

    * List similarities between X framework and Vue
    * List main differences, taking notes of possible tripping points
    * Briefly list benefits of Vue over X
    * Optional links to well written articles on the topic

### Angular

### AngularJS (Angular 1.x)

**Similarities**

- Both use a templating system based on HTML
- Directives
- Filters
- Component approach (AngularJS from 1.5.x)

**Differences**

- Reactivity implementation - Angular has dirty checking phases, where a check is done in regards of what model is out of sync with the DOM and updates are performed.
- Possible issues when converting an AngularJS codebase to Vue - Best practices differ, AngularJs encourages extensive use of filters while in Vue computed properties are preferred).

 **Why Switch?** 

 - Dirty checking of AngularJs can cause loops and be extremely slow
 - Unit testing Vue components is easier
 - Vue has a much smaller footprint
 - Vue is less verbose - easier learning curve, lower entry point
 - The Vue community is active and evolving, while the AngularJs one shifted attention to Angular (2x, 3x, 4x) 

<useful-links>
<useful-links-section title="Useful links"> 
 
 [VueJs Docs](https://vuejs.org/v2/guide/comparison.html#AngularJS-Angular-1)
 
</useful-links-section>
</useful-links>

### React

### Polymer

### No Framework - jQuery

## Usage with Backend Frameworks

    * List why this combination may be a good fit
    * Showcase possible drawbacks of this combination
    * Optional links to articles 

### Express

### Koa

### Adonis

### Laravel

#### Reasons to use Laravel and Vue

##### Scaffolded by default

Laravel [by default comes with everything you need](https://laravel.com/docs/5.7/frontend#writing-vue-components) to get up and running with Vue.

After having created a Laravel project, you'll be provided with:

- a `bootstrap.js` file which:
    - loads some libraries such as lodash, axios and Popper
    - configures axios for CSRF
- an `app.js` file which:
    - makes `Vue` globally available
    - registers the example component with Vue
    - provides example code on how to automatically register Vue components
    - initialises Vue
- an `ExampleComponent.vue` component

You are of course free to customise these files to your needs - such as by removing unused libraries.

###### Compiling assets

[Laravel Mix](https://laravel.com/docs/5.7/mix)--a fluid API on top of Webpack which is also provided by default--will take much of the pain out of asset compiling for you.

You simply need to run `npm run watch` and then you can get straight to work on writing your Vue components!

##### Widespread community adoption

Several prominent members of the Laravel community are proponents of Vue (and its ecosystem).

This includes but is not limited to:

- Taylor Otwell
    - Founder (and Benevolent Dictator for Life) of Laravel itself
    - Known user of Laravel and Vue
- Adam Watham
    - Author of TailwindCSS
    - Creator of the Advanced Vue Component Design course
    - Known user of Laravel and Vue
- Jeffrey Way
    - Author of various books on Laravel
    - Speaker at Laracon
    - Creator of several Laravel/Vue courses
    - Known user of Laravel and Vue

This advocacy and support of Vue seemingly extends to the Laravel community as a whole, meaning that a majority of Laravel developers will likely be more comfortable and familiar with Vue than say React or Angular.

Naturally, then, it follows that there will be:

- more resources to help you learn (guides, tutorials, articles)
- more people who have experience with Vue+Laravel (help, support, guidance)
- in general a healthy ecosystem (plugins, boilerplates, etc.)

#### Common gotchas when using Laravel and Vue together

##### Blade and Vue interpolation syntax

As you may be aware both [Blade templates](https://laravel.com/docs/5.8/blade#displaying-data) and [Vue templates](https://vuejs.org/v2/guide/#Declarative-Rendering) use moustache syntax (i.e. `{{ message }}`) for variable interpolation, which presents a problem. Fortunately the solution is simple.

Simply prepend an `@` to the moustache statement. This will [instruct the Blade template rendering engine](https://laravel.com/docs/5.8/blade#blade-and-javascript-frameworks) to ignore this statement, leaving it to be later processed by Vue.

```html
<p>You have @{{ messageCount }} new message(s).</p>
```

If you need to escape several moustache statements, you may use the `@verbatim` directive instead.

```html
@verbatim
    <div class="container">
        <p>Welcome {{ user.name }} ({{ user.id }})!</p>
        <p>Your last visit was: {{ user.lastVisit }}.</p>
    </div>
@endverbatim
```

##### Passing PHP data to components

##### Using Laravel and vue-router routes together

### Ruby

### Django

### .Net

