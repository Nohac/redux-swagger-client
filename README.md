Redux Swagger Client 
====================

Swagger middleware for redux

## About
This is an attempt to add asynchronous swagger api calls to redux. It works by dispatching an action that includes the field `swagger` that takes a function and passes the swagger client element to that function. If the swagger spec has not yet been parsed, the action will get queued.

## Installation
note: This module requires [redux-thunk](https://github.com/gaearon/redux-thunk)

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

## Usage
```js
function fetchPets() {
  return (dispatch) => {
    dispatch({ 
      type: "FETCH_PETS",
      swagger: (s) => {
        s.pet.findPetsByStatus({status: 'available'}, 
          (pets) => { dispatch({
            type: "FETCH_PETS_SUCCESS",
            payload: pets
          })}
        )
      }
    })
  }
}

store.dispatch(fetchPets())
```
