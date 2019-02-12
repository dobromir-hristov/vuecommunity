# Client Server Communication

When working with SPA's it is very common to fetch data from remote services. This allows for dynamic content to be displayed depending on certain applied criteria. Fetching of said data can be done in many ways, some of which are described below.

## Ajax requests

Ajax requests to REST API's are the most common way of fetching data asynchronously from remote services. Requests are sent to a server, where data is processed. In the meantime, depending on the implementation, we can either have a callback based approach or the newer Promise based one, where we can wait until the process either succeeds or errors out.

### Axios

Axios is a famous library for performing async requests. It has a very nice and easy to use API, supports Promises, more advanced features like interceptors, generating Axios instances, adding external plugins and more.

You can directly import Axios from npm and use it in your components, without the need to install a dedicated plugin.

**Useful Links**
* [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/)

### Fetch

Fetch is a newer Promise based API that is integrated into [modern Browsers](https://caniuse.com/#search=fetch). 

> Fetch makes it easier to make web requests and handle responses than with the older XMLHttpRequest, which often requires additional logic (for example, for handling redirects).
[Working with the Fetch API - Google - Progressive Web Apps Training ](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api)

You can also import a library like `isomorphic-fetch` for using fetch in Node.js environment, where it is not available.

**Useful Links**
* [Let's build Type Ahead Component with VueJS 2 and Fetch API](https://scotch.io/@bedakb/lets-build-type-ahead-component-with-vuejs-2-and-fetch-api)
* [Understanding the Fetch API](https://flaviocopes.com/fetch-api/)

## GraphQL

-- what is GraphQL
-- When does it make sense to use it
-- links to tutorials

### Vue Apollo

-- What is Apollo
-- common use cases
-- why use with vue
-- links to tutorials
-- Vue packages

## Websockets

Unlike http requests, which are one way communication from client to server, Websockets allow for a realtime two way communication. This allows for implementing notifications, dashboards, chats, realtime interactions and more.

**Useful Links**
* [What are WebSockets?](https://pusher.com/websockets)
* [An Introduction to WebSockets](https://blog.teamtreehouse.com/an-introduction-to-websockets)

### Pusher

Pusher is service which offers an abstraction over Websockets, allowing users to use a simplified API to subscribe to realtime notifications. It implements the notion of channels and events, where a single channel can have multiple event types.

Pusher can be used for chats, games, location sharing and more.

**Useful Links**
* [Create a realtime prototype feedback app using VueJS and Pusher](https://dev.to/neo/create-a-realtime-prototype-feedback-app-using-vuejs-and-pusher--5g92)
* [Pusher + Vue + Laravel](https://medium.com/@danielalvidrez/laravel-pusher-lets-do-it-96bd23e76a7e)

### Firebase

Firebase is a service by Google which offers a realtime NoSQL database, that users can write or read from. Client data gets synchronized in real time between all connected.

-- Improve description
-- Note Common usages
-- why use with vue
-- Note Vue Packages
-- tutorials

### Feathers

-- What is Feathers
-- Common usages
-- Why use with Vue
-- Popular Vue Packages
-- tutorials

### Meteor

-- What is Meteor
-- Common usages
-- Why use with Vue
-- Popular Vue Packages
-- tutorials

### SocketIO

-- What is SocketIO
-- Common usages
-- Why use with Vue
-- Popular Vue Packages
-- tutorials

[Integrating Vue.js and Socket.io](https://alligator.io/vuejs/vue-socketio/)

## SSE - Server Sent Events

-- What are SSE
-- Common usages
-- Why use with Vue
-- Popular Vue Packages
-- tutorials

https://github.com/tserkov/vue-sse#readme

## MQTT

-- What is MQTT
-- Common usages
-- Why use with Vue
-- Popular Vue Packages
-- tutorials
