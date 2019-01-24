# Hosting

Choosing a proper hosting for a Vue.js website can be frustrating. You need to know the type of website you are working with, to choose a proper hosting provider. Typically Vue.js websites can be split into 4 major categories. 

* Pre-rendered - Websites that are pre-rendered before deploying to a server, meaning each page consists of a static html file.
* SPA - Websites consisting of a single index.html entry and a bunch of generated static assets. Page rendering and routing is done on the client in the Browser. Such websites do not require a dedicated server to run and can be hosted on a static file hosting.
* SSR (Universal) SPA - Websites are initially rendered on the server upon visit, then the SPA part of the website takes over routing, rendering and other functionality. These typically require a Node.js server constantly running.
* Server rendered none SPA website - Server rendered websites, that rely on the server to render and handle routing, using Vue for additional in-browser functionality. Most commonly seen are Laravel, Wordpress, Rails or Django based websites.

## Static File Hosting
Static file hosting is generally used to serve rarely changing assets, that are processed and generated upfront, to the client's browser in the most optimized and fast way. Such hosting solutions are perfect for SPA's or Pre-rendered websites, as they are mostly a collection of static files and require no runtime processing. These hosting services cannot run files containing dynamic code like `.php` or `.js` node scripts.

[Article explaining static content](https://www.maxcdn.com/one/visual-glossary/static-content/)

### Netlify
Netlify is one of the most popular static file hosting services. It has an easy to work with interface, offers great speed, free and super easy to setup SSL, url rewrites, custom header setup, cloud functions and more. This makes it a top choice for most people building SPA's. They offer integration for GitHub, Bitbucket and GitLab. Netlify offers a free hosting tier, which should suite most people's needs.

[CSS-Tricks article on Netlify](https://css-tricks.com/static-file-hosting-doesnt-have-to-be-so-static/)

### GitHub/GitLab/Bitbucket Pages
The top 3 Git services offer free static website hosting. You can deploy your websites to them by just committing your code to a repo, that gets automatically deployed for you. You can connect a custom domain or use their subdomains, Gitlab even offers a CI Pipeline to build your website on the fly. 

[GitHub Pages](https://pages.github.com/)
[GitLab Pages](https://gitlab.com/help/user/project/pages/index.md)
[Bitbucket Pages](https://pages.bitbucket.io/) 

### Firebase Hosting
Firebase Hosting is a free static content hosting by Google, that offers a quick and easy way to deploy websites to a global CDN. Their [Cloud Functions](https://firebase.google.com/docs/functions/) can be used to build Serverless microservices with Node. They also offer lightweight hosting configuration options like URL rewrites and custom header setup.

[Firebase Hosting docs](https://firebase.google.com/docs/hosting/)

### CloudFront
CloudFront is a fast content delivery network by Amazon. They boast high speed, low downtime and flexible configuring options, at a pay-as-you-go pricing model. CloudFront is integrated with AWS and works seamlessly with other Amazon services like DDoS mitigation, Amazon S3, Load Balancing and more.

[CloudFront](https://aws.amazon.com/cloudfront/)

### Surge.sh

### Now.sh

## Traditional Server Hosting
If you are planning to build a Laravel or Nuxt powered website, then you will need a more traditional hosting solution.

Opposed to Static File Hosting, this kind of hosting offers a configured server, that is constantly up and ready to run your dynamic scripts. Be it Node.js or PHP, such hosting providers are usually paid as they require dedicated resources to be allocated to you. There are free solutions, but they are usually very limited in terms of features, with some very good cheap ones available.

One would use such a hosting service typically for hosting a PHP, Python or Node.js backed website. 

### Heroku

### Digital Ocean
