Redux Swagger Client 
====================

Swagger middleware for redux

## About
This is an attempt to add asynchronous swagger api calls to redux. It works by dispatching an action that includes the field `swagger` that takes a function and passes the swagger client element to that function. If the swagger spec has not yet been parsed, the action will get queued.

## Installation
note: This module requires [redux-thunk](https://github.com/gaearon/redux-thunk)
Github:
```
npm install --save github:noh4ck/redux-swagger-client
```

Package pending:
```
npm install --save redux-swagger-client
```

To enable Redux Swagger-client, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):

```js
import { createStore, applyMiddleware } from 'redux'
import swaggerClient from 'redux-swagger-client'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware([
    thunk,
    swaggerClient({url:'http://petstore.swagger.io/v2/swagger.json'})
  ])
);
```

## Usage
```js
function fetchPet() {
  return { 
    types: ["FETCH_PETS", "FETCH_PETS_SUCCESS", "FETCH_PETS_FAILED"],
    swagger: api => api.pet.findPetsByStatus({status: 'available'})
  }
}

store.dispatch(fetchPets())
```
