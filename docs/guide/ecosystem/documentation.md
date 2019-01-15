# Documentation platforms
Documentation is a very important part of any software, especially if it is going to be used by more than one developer. 

There are a few ways to document software, one is directly inside the code via comments and type declarations, while the other is using external documentation sources, from files (usually .md) inside project to full blown websites.

## Tips on managing docs

## Documentation websites
When choosing a platform to write your docs on, think about your priorities and preferences. 
  - Do you want to write in markdown files or do you prefer to write html webpages? 
  - Do you want a custom designed website or a generic one will do just fine?
  - Is SEO important to you? 
  - Do you mind a pre-build step or do you want everything to run as is?
  - Do you need custom features, specific for your documentation purposes?
  - Where do you plan to host your documentation? Can you use static site hosting or do you need a server?
  
### Vuepress
[Vuepress](http://vuepress.vuejs.org/) is a Vue-powered static site generator, that by default is optimized for technical documentation.

Vuepress websites are actually Vue based SPA's that use Vue Router and webpack, with content built from plain markdown files. During the build process, a static server side rendered version of website is generated, ensuring great loading performance and improved SEO, compared to a traditional SPA.

So to answer the questions above:
  - You will write in `.md` files, but have the option to use actual Vue components inside them. This gives it an enormous advantage to other similar platforms.
  - Vuepress comes with one documentation optimized theme by default, but allows providing custom ones.
  - Being Server Side Rendered, all pages are actually static html files, so search crawlers can scan them easily, plus pages load super fast.
  - As the markdown files need to be transformed to html, a pre-build step is required. One can do it manually, use CI or deploy to a hosting with a build step, like Netlify.
  - As Vupress offers the full power of Vue.js, you can do pretty much any custom component you need.
  - Vupress websites, when rendered, are just static html files, so any static file hosting will do, which are cheap, some of them even free. Check our [Hosting](./hosting.md#static-hosting) page for more information on hosting providers.
  
Learn all about Vuepress on their [documentation website](https://vuepress.vuejs.org/guide/#features) (also built with Vuepress).

### Docute
[Docute](https://docute.org/) is another Vue-powered website, though it is not Server Side Render, but a normal SPA.

Docute, in a nutshell, fetches Markdown files and renders them on the fly, serving a fully working SPA. Because there is no build process, users can preview and deploy changes immediately, without any pre-build steps.

Docute also allows for Vue components, to be defined and used inside markdown files, so lots of room for improvement.

Here are the answers from the above questions:
  - Pages are written in `.md` files, along with the option of having Vue components inside the files.
  - It is hard to update/change the website's default theme.
  - There is no pre-build step. `.msd`files is fetched and rendered runtime.
  - As can register Vue Components globally, so customized components are possible.
  - Docute websites are just plain static websites, so twe might find the clue or not.
  
## Other website doc platforms
Below are a few other good choices for documentation machines. 

### Docsify
[Docsify](https://docsify.js.org/#/)

### Jekyll
[Jekyll](https://jekyllrb.com/)

### Hexo
[Hexo](https://hexo.io/)

### GitBook
[GitBook](https://www.gitbook.com/)  
## Automatic documentation generators

> such that scan components and even jsdoc and generate json objects or whole docs files
