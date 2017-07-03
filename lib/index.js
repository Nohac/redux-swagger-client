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
  var _this = this;

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
              actions = action.actions,
              rest = _objectWithoutProperties(action, ['swagger', 'types', 'actions']);

          var _ref2 = actions || types,
              REQUEST = _ref2[0],
              SUCCESS = _ref2[1],
              FAILURE = _ref2[2];

          var callApi = function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(apis, sw) {
              var error, resp;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(typeof sw !== 'function')) {
                        _context.next = 4;
                        break;
                      }

                      error = new Error('Swagger api call is not a function');

                      opts.error && opts.error(error);
                      throw error;

                    case 4:
                      if (typeof REQUEST === 'function') next(REQUEST(rest));else if (REQUEST) next(_extends({}, rest, { type: REQUEST }));
                      _context.t0 = !!opts.preRequest;

                      if (!_context.t0) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 9;
                      return opts.preRequest(action);

                    case 9:
                      _context.prev = 9;
                      _context.next = 12;
                      return sw(apis, action);

                    case 12:
                      resp = _context.sent;

                      if (!(typeof SUCCESS === 'function')) {
                        _context.next = 17;
                        break;
                      }

                      return _context.abrupt('return', next(SUCCESS(_extends({}, rest, { result: resp }))));

                    case 17:
                      if (!(SUCCESS !== undefined)) {
                        _context.next = 19;
                        break;
                      }

                      return _context.abrupt('return', next(_extends({}, rest, { result: resp, type: SUCCESS })));

                    case 19:
                      _context.next = 29;
                      break;

                    case 21:
                      _context.prev = 21;
                      _context.t1 = _context['catch'](9);

                      if (!(typeof FAILURE === 'function')) {
                        _context.next = 27;
                        break;
                      }

                      return _context.abrupt('return', next(FAILURE(_extends({}, rest, { error: _context.t1 }))));

                    case 27:
                      if (!(FAILURE !== undefined)) {
                        _context.next = 29;
                        break;
                      }

                      return _context.abrupt('return', next(_extends({}, rest, { error: _context.t1, type: FAILURE })));

                    case 29:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this, [[9, 21]]);
            }));

            return function callApi(_x, _x2) {
              return _ref3.apply(this, arguments);
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