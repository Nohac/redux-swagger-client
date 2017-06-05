import Swagger from 'swagger-client';

export default function swaggerMiddleware(opts) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    if (!action.swagger) {
      return next(action);
    }

    return new Swagger({
      ...opts,
      requestInterceptor(req) {
        return !!opts.requestInterceptor
          ? opts.requestInterceptor(req, action)
          : req;
      },
      responseInterceptor(resp) {
        return !!opts.responseInterceptor
          ? opts.responseInterceptor(resp, action)
          : resp;
      }
    })
      .then(result => {
        const { swagger, types, ...rest } = action;
        const [REQUEST, SUCCESS, FAILURE] = types;
        const callApi = async (apis, sw) => {
          if (typeof sw !== 'function') {
            const error = new Error('Swagger api call is not a function');
            opts.error && opts.error(error);
            throw error;
          }
          next({ ...rest, type: REQUEST });
          !!opts.preRequest && await opts.preRequest(action);
          try {
            const resp = await sw(apis, action);
            return next({ ...rest, result: resp, type: SUCCESS });
          } catch (error) {
            return next({ ...rest, error, type: FAILURE });
          }
        };

        return callApi(result.apis, swagger);
      },
      err => opts.error && opts.error(err)
    ).catch(err => opts.error && opts.error(err));
  }
}
