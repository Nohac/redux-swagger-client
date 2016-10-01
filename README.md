Redux Swagger Client 
====================

Swagger middleware for redux

## About
This is a attempt to add asyncronus swagger api calls to redux. It works by dispatching an action that includes the field `swagger` that takes a function and passes the swagger client element to that function. If the swagger spec has not yet ben parsed, the action will get cued.

## Installation

```
npm install --save redux-swagger-client
```

Then, to enable Redux Swagger-client, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):

```js
import { createStore, applyMiddleware } from 'redux';
import swaggerClient from 'redux-swagger-client';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(swaggerClient({url:'http://petstore.swagger.io/v2/swagger.json'})
);
```
