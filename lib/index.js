'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = swaggerMiddleware;

var _swaggerClient = require('swagger-client');

var _swaggerClient2 = _interopRequireDefault(_swaggerClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function swaggerMiddleware(opts) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        if (!action.swagger) {
          return next(action);
        }

        return new _swaggerClient2['default'](_extends({}, opts, {
          requestInterceptor: function requestInterceptor(req) {
            return !!opts.requestInterceptor ? opts.requestInterceptor(req, action) : req;
          },
          responseInterceptor: function responseInterceptor(resp) {
            return !!opts.responseInterceptor ? opts.responseInterceptor(resp, action) : resp;
          }
        })).then(function (result) {
          var swagger = action.swagger,
              types = action.types,
              rest = _objectWithoutProperties(action, ['swagger', 'types']);

          var REQUEST = types[0],
              SUCCESS = types[1],
              FAILURE = types[2];

          var callApi = function () {
            var _ref2 = _asyncToGenerator(function* (apis, sw) {
              if (typeof sw !== 'function') {
                var error = new Error('Swagger api call is not a function');
                opts.error && opts.error(error);
                throw error;
              }
              next(_extends({}, rest, { type: REQUEST }));
              !!opts.preRequest && (yield opts.preRequest(action));
              try {
                var resp = yield sw(apis, action);
                return next(_extends({}, rest, { result: resp, type: SUCCESS }));
              } catch (error) {
                return next(_extends({}, rest, { error: error, type: FAILURE }));
              }
            });

            return function callApi(_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }();

          return callApi(result.apis, swagger);
        }, function (err) {
          return opts.error && opts.error(err);
        })['catch'](function (err) {
          return opts.error && opts.error(err);
        });
      };
    };
  };
}