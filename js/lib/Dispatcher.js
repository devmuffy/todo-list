var Promise = require('promise');
var assign = require('lodash/object/assign');

var _callbacks = [];
var _promises = [];

var Dispatcher = function () {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  /**
   * @param {function} callback
   * @return {number} The index of the callback within the _callbacks array.
   */
  register: function (callback) {
    _callbacks.push(callback);
    console.info(callback, _callbacks);
    return _callbacks.length - 1;
  },

  /**
   * @param {object} payload The data from the action.
   */
  dispatch: function (payload) {
    var resolves = [];
    var rejects = [];
    _promises = _callbacks.map(function (_, i) {
      return new Promise(function (resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    });

    _callbacks.forEach(function (callback, i) {
      Promise.resolve(callback(payload)).then(function () {
        resolved[i](payload);
      }, function () {
        rejects[i](new Error('Dispatcher callback unsuccessful'));
      });
    });

    _promises = [];
  }

});

module.exports = Dispatcher;
