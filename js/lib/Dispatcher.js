var Promise = require('promise');
var assign = require('lodash/object/assign');

var _callbacks = [];

var Dispatcher = function () {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  /**
   * @param {function} callback
   * @return {number} The index of the callback within the _callbacks array.
   */
  register: function (callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1;
  },

  /**
   * @param {object} payload The data from the action.
   */
  dispatch: function (payload) {
    _callbacks.forEach(function (callback, i) {
      callback(payload);
    });
  }

});

module.exports = Dispatcher;
