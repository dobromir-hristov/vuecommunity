# Hosting

Choosing a proper hosting for a Vue.js website can be frustrating. You need to know the type of website you are working with, to choose a proper hosting provider. Typically Vue.js websites can be split into 2 major categories. 

## Static file websites
These websites are made out of only static files, that require no server scripts, and are entirely run on the clients browser. Such websites are:

* Pre-rendered - Websites that are pre-rendered before deploying to a server, meaning each page is represented by a static html file. Checkout the [Statically generated websites](../learning/how-to-learn-vue.md#statically-generated-websites) for mor info.
* SPA - Websites consisting of a single index.html entry and a bunch of generated static assets. Page rendering and routing is done on the client in the Browser. Such websites do not require a dedicated server to run and can be hosted on a static file hosting. Checkout the [SPA websites](../learning/how-to-learn-vue.md#spa-websites) page for mor info.

These websites can be hosted on [Traditional Hosting](#traditional-server-hosting) or on the cheaper [Static File Hosting](#static-file-hosting) described below. Check the [Vue CLI 3 - Deployment](https://cli.vuejs.org/guide/deployment.html) page to see how to deploy to the most popular hosting providers.

## Static File Hosting
Static file hosting is generally used to serve rarely changing assets, that are processed and generated upfront, to the client's browser in the most optimized and fast way. Such hosting solutions are perfect for SPA's or Pre-rendered websites, as they are mostly a collection of static files and require no runtime processing. These hosting services cannot run files containing dynamic code like `.php` or `.js` node scripts.

#### Useful Resources

[Article explaining static content](https://www.maxcdn.com/one/visual-glossary/static-content/)

### Netlify
Netlify is a popular choice for a static file hosting service. It offers a simple to use interface, global CDN, free and easy to setup SSL, url rewrites, custom header setup, cloud functions and more. 

They offer integration with GitHub, Bitbucket and GitLab. Netlify offers a free hosting tier, which should suite most people's needs.

#### Useful Resources

* [Netlify Docs](https://netlify.com)
* [How to deploy your Vue app with Netlify in less than 2 min!](https://medium.com/vuejoy/how-to-deploy-your-vue-app-with-netlify-in-less-than-2-min-d6ab26c6557d)
* [Deploy Nuxt.js Static App to Netlify](https://vueschool.io/lessons/deploy-nuxtjs-app-to-netlify)
* [CSS-Tricks article on Netlify](https://css-tricks.com/static-file-hosting-doesnt-have-to-be-so-static/)

### GitHub/GitLab/Bitbucket Pages
The top 3 Git services offer free static website hosting. You can deploy your websites to them by just committing your code to a repo, that gets automatically deployed for you. You can connect a custom domain or use their subdomains, Gitlab even offers a CI Pipeline to build your website on the fly. 

#### Useful Resources

* [Deploy Vue to GitHub pages-the easy way!](https://medium.com/@codetheorist/vue-up-your-github-pages-the-right-way-955486220418)
* [Deploy CLI 3 app to GitLab Pages](https://cli.vuejs.org/guide/deployment.html#gitlab-pages)
* [Bitbucket Pages](https://pages.bitbucket.io/) 

### Firebase Hosting
Firebase Hosting is a free static content hosting by Google, that offers a quick and easy way to deploy websites to a global CDN. Their [Cloud Functions](https://firebase.google.com/docs/functions/) can be used to build Serverless microservices with Node. They also offer lightweight hosting configuration options like URL rewrites and custom header setup.

#### Useful Resources

* [Firebase Hosting docs](https://firebase.google.com/docs/hosting/)
* [Deploy a Vue.js App with Firebase Hosting](https://medium.com/@ShayneOSullivan/deploy-a-vue-js-app-with-firebase-hosting-3fc420cf3998)

### CloudFront
CloudFront is a fast content delivery network by Amazon. They boast high speed, low downtime and flexible configuring options, at a pay-as-you-go pricing model. CloudFront is integrated with AWS and works seamlessly with other Amazon services like DDoS mitigation, Amazon S3, Load Balancing and more.

* [CloudFront](https://aws.amazon.com/cloudfront/)
* [Deploy Vue App to AWS S3](https://itnext.io/deploy-vue-app-to-aws-s3-1256ce03a7a2)

### Surge.sh

### Now.sh

## Server Rendered websites
These websites can be SPA's or normal websites that have only parts of them written in Vue. They usually require a script to be run on the server to render the page, be it Node.js, PHP or other server language. Examples of such are Laravel websites, Node.js apps written on Express, Koa, Adonis or other similar framework.


* SSR (Universal) SPA - Websites are rendered on the server upon visit, then the SPA part of the website takes over routing, rendering and other functionality. These typically require a Node.js server constantly running. Checkout the [What are Server Side Rendered apps](../learning/how-to-learn-vue.md#ssr-spa-websites) page for more info.
* Server rendered none SPA website - Server rendered websites, that rely on the server to render and handle routing, using Vue for additional in-browser functionality. Most commonly seen are Laravel, Wordpress, Rails or Django based websites. Visit the [Vue enhanced websites](../learning/how-to-learn-vue.md#vue-enhanced-websites) page for more info.

These websites can only be run on a more traditional server hosting, where a server script is always listening and handling incoming requests.

## Traditional Server Hosting
If you are planning to build a Laravel or Nuxt powered website, then you will need a more traditional hosting solution.

Opposed to Static File Hosting, this kind of hosting offers a configured server, that is constantly up and ready to run your dynamic scripts. Be it Node.js or PHP, such hosting providers are usually paid as they require dedicated resources to be allocated to you. There are free solutions, but they are usually very limited in terms of features, with some very good cheap ones available.

One would use such a hosting service typically for hosting a PHP, Python or Node.js backed website. 

### Heroku

#### Useful Resources

* [Quick-n-clean way to deploy Vue + Webpack apps on Heroku](https://codeburst.io/quick-n-clean-way-to-deploy-vue-webpack-apps-on-heroku-b522d3904bc8)

### Digital Ocean
