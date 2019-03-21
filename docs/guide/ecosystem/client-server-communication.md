# Client Server Communication

When working with SPA's it is very common to fetch data from remote services. This allows for dynamic content to be displayed depending on certain applied criteria. Fetching of said data can be done in many ways, some of which are described below.

## Ajax requests

Ajax requests to REST API's are the most common way of fetching data asynchronously from remote services. Requests are sent to a server, where data is processed. In the meantime, depending on the implementation, we can either have a callback based approach or the newer Promise based one, where we can wait until the process either succeeds or errors out.

### Axios

Axios is a famous library for performing async requests. It has a very nice and easy to use API, supports Promises, more advanced features like interceptors, generating Axios instances, adding external plugins and more.

You can directly import Axios from npm and use it in your components, without the need to install a dedicated plugin.

<useful-links>
<useful-links-section title="Tutorials">

* [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/)

</useful-links-section>
</useful-links>

### Fetch

Fetch is a newer Promise based API that is integrated into [modern Browsers](https://caniuse.com/#search=fetch). 

> Fetch makes it easier to make web requests and handle responses than with the older XMLHttpRequest, which often requires additional logic (for example, for handling redirects). - [Working with the Fetch API - Google - Progressive Web Apps Training ](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api)

You can also import a library like `isomorphic-fetch` for using fetch in Node.js environment, where it is not available.

To use it with Vue, you dont need plugins, you can just import `fetch` and start working.

<useful-links>
<useful-links-section title="Tutorials">

* [Let's build Type Ahead Component with VueJS 2 and Fetch API](https://scotch.io/@bedakb/lets-build-type-ahead-component-with-vuejs-2-and-fetch-api)
* [Understanding the Fetch API](https://flaviocopes.com/fetch-api/)

</useful-links-section>
</useful-links>

## GraphQL
::: tip
 This part of the page needs a bit of love. If you can, please contribute by adding the missing info.
:::
- What is GraphQL
- When does it make sense to use it
- Links to tutorials

### Vue Apollo

- What is Apollo
- Common use cases
- Why use with Vue
- Links to tutorials
- Vue packages

## WebSockets

Unlike HTTP requests, which are one way communication from client to server, WebSockets allow for a realtime two way communication. This allows for implementing notifications, dashboards, chats, realtime interactions and more.


<useful-links>
<useful-links-section title="Tutorials">

* [What are WebSockets?](https://pusher.com/websockets)
* [An Introduction to WebSockets](https://blog.teamtreehouse.com/an-introduction-to-websockets)

</useful-links-section>
</useful-links>

### Pusher

Pusher is service which offers an abstraction over Websockets, allowing users to use a simplified API to subscribe to realtime notifications. It implements the notion of channels and events, where a single channel can have multiple event types.

Pusher can be used for chats, games, location sharing and is most commonly used with frameworks like Laravel, when realtime communication with client is needed.


<useful-links>
<useful-links-section title="Tutorials">

* [Create a realtime prototype feedback app using VueJS and Pusher](https://dev.to/neo/create-a-realtime-prototype-feedback-app-using-vuejs-and-pusher--5g92)
* [Pusher + Vue + Laravel](https://medium.com/@danielalvidrez/laravel-pusher-lets-do-it-96bd23e76a7e)

</useful-links-section>
</useful-links>

### Firebase

> Store and sync data with our NoSQL cloud database. Data is synced across all clients in realtime, and remains available when your app goes offline. - Firebase Docs

Along with database, they offer authentication, static hosting, data storage and more. Thanks to their server-side libraries and REST api's you can connect Firebase to your existing backend. You can build realtime chats, dashboards, cross device notifications and much more.

Implementing Firebase into your Vue app directly with their SDK can be a bit of a hassle as you need to keep track of allot of things, bind documents, etc. Luckily there is the official [Vuefire](https://github.com/vuejs/vuefire) package that makes it allot easier.


<useful-links>
<useful-links-section title="Tutorials">

* [Building a Vue app with Firebase authentication ](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)
* [Building A Real-Time Chat Application With Vue.js and Firebase](https://codingthesmartway.com/building-a-real-time-chat-application-with-vue-js-and-firebase-part-1/)
* [Full Stack Vue.js with Firestore](https://medium.com/vue-mastery/full-stack-vue-js-with-firestore-62e2fe2ec1f3)
* [Vue.js Firebase Integration with VueFire](https://alligator.io/vuejs/vuefire-firebase/)

</useful-links-section>
</useful-links>

### Feathers

- What is Feathers
- Common usages
- Why use with Vue
- Popular Vue Packages
- Tutorials

### Meteor

- What is Meteor
- Common usages
- Why use with Vue
- Popular Vue Packages
- Tutorials

### SocketIO

::: tip
 This part of the page needs a bit of love. If you can, please contribute by adding the missing info.
:::

- What is SocketIO
- Common usages
- Why use with Vue
- Popular Vue Packages
- Tutorials

[Integrating Vue.js and Socket.io](https://alligator.io/vuejs/vue-socketio/)

## SSE - Server Sent Events

::: tip
 This part of the page needs a bit of love. If you can, please contribute by adding the missing info.
:::

- What are SSE
- Common usages
- Why use with Vue
- Popular Vue Packages
- tutorials

https://github.com/tserkov/vue-sse#readme

## MQTT

::: tip
 This part of the page needs a bit of love. If you can, please contribute by adding the missing info.
:::

> MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. - MQTT.org

You can use MQTT to transfer small pieces of data in realtime between devices. It is most commonly used to send sensor readings from low processor devices.


<useful-links>
<useful-links-section title="Tutorials">

* [Vue-Mqtt](https://github.com/nik-zp/vue-mqtt)
* [Vue-Mqtt-Example](https://github.com/nik-zp/Vue-Mqtt-Example)
* [Connecting Nuxt.js to MQTT](https://imantabrizian.me/posts/2017/11/nuxt-mqtt)
* [Real-time visualization of high-frequency streams](https://itnext.io/javascript-real-time-visualization-of-high-frequency-streams-d6533c774794)

</useful-links-section>
</useful-links>
