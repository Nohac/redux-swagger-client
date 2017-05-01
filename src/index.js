import Swagger from 'swagger-client';

export default function swaggerMiddleware(opts) {
  const waitQueue = [];
  let client;
  new Swagger(opts)
    .then(
      result => {
        client = result;
        //console.log('swaggerMiddleware:inited', result, client);

        while (waitQueue.length) {
          const a = waitQueue.shift();
          a(client.apis);
        }
      },
      err => console.error('swaggerMiddleware:inited2', err)
    ).catch(err => console.error('swaggerMiddleware:inited1', err));

  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    if (!action.swagger) {
      return next(action);
    }
    const { swagger, types, ...rest } = action;
    const [REQUEST, SUCCESS, FAILURE] = types;
    const callApi = (c, sw) => {
      // console.log('swaggerMiddleware:callApi', c, sw, action);
      return typeof sw === 'function'
        ? sw(c)
          .then(
            (result) => next({ ...rest, result, type: SUCCESS }),
            (error) => next({ ...rest, error, type: FAILURE })
          ).catch(error => {
            console && console.error && console.error('MIDDLEWARE ERROR:', error);
            next({ ...rest, error, type: FAILURE });
          })
        : console.error('Swagger api call is not a function')
    };
    // console.log('swaggerMiddleware: got it!', client, waitQueue);

    // Add async api calls to queue if not ready
    if (!client) {
      waitQueue.push((c) => {
        next({ ...rest, type: REQUEST });
        callApi(c, swagger);
      });
    } else {
      // Call payload and pass the swagger client
      next({ ...rest, type: REQUEST });
      return callApi(client.apis, swagger);
    }

    return undefined;
  }
}
