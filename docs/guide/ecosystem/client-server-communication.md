# Client Server Communication

Why is this and Why do we need this

## Ajax requests

Ajax requests are the most common way of fetching data asynchronously from remote services. Requests are sent to a server, where data is processed. In the meantime, depending on the implementation, we can either have a callback based approach or the newer Promise based one, where we can wait untill the process either succeeds or errors out.

### Axios

Axios is a famous library for performing async requests. It has a very nice and easy to use API, supports Promises, more advanced features like interceptors, generating Axios instances, adding external plugins and more.

You can directly import Axios from npm and use it directly in your components, without the need to install a dedicated plugin.

-- tutorials

### Fetch

Fetch is a newer Promise based API that is integrated into modern Browsers. It allows for performing Async requests, streaming data, ...

You can also import a library like `isomorphic-fetch` for using fetch in Node.js environment, where it is not available.

-- improve description
-- tutorials

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

Websocekts give you a mechanism to subscribe to a stream of data from a server, where on each change the subscriber gets automatically notified. This allows for implementing notifications, dashboards, chats, realtime interactions and more.

### Pusher

Pusher is service which offers an obstraction over Websockets, allowing users to use a simplified API to subscribe to realtime notifications. It implements the notion of channels, where a single XX can have multiple channels.

-- refine desription
-- list a few common use cases
-- packages
-- tutorials

### Firebase

Firebase is a service by Google which offers a realtime database, that users can write or read from, and get instantly notified about changes to the data by other clients.

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

-- What is Metero
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
