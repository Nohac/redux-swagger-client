'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _swaggerClient = require('swagger-client');

var _swaggerClient2 = _interopRequireDefault(_swaggerClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (opts) {
  return function (store) {
    return function (next) {
      var waitQueue = [];
      var ready = false;

      var callApi = function callApi(swagger) {
        if (typeof swagger === 'function') swagger(client);else console.error("Swagger api call is not a function");
      };

      var client = new _swaggerClient2['default'](_extends({}, opts, {
        success: function success() {
          ready = true;
          while (waitQueue.length) {
            var action = waitQueue.shift();
            callApi(action.swagger);
            next(action);
          }
        }
      }));
      return function (action) {
        if (action.swagger) {
          // Add async api calls to queue if not ready
          if (ready == false) waitQueue.push(action);else {
            // Call payload and pass the swagger client
            callApi(action.swagger);
            return next(action);
          }
        } else return next(action);
      };
    };
  };
};