var Dispatcher = require('../lib/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var BudgetConstants = require('../constants/BudgetConstants');
var ItemClient = require('../client/ItemClient');
var assign = require('lodash/object/assign');

var CHANGE_EVENT = 'change';
var _items = ItemClient.load();

/**
 * @param {string} text The content of the expense
 */
function create(text) {
  var id = Date.now();

  _items[id] = {
    id: id,
    complete: false,
    text: text
  };
  ItemClient.save(_items);
}

function del(id) {
  if (_items.hasOwnProperty(id)) {
    delete _items[id];
    ItemClient.save(_items);
  }
}

var ExpenseStore = assign({}, EventEmitter.prototype, {

  getAll: function () {
    return _items;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

Dispatcher.register(function (payload) {
  switch(payload.actionType) {
    case BudgetConstants.ActionTypes.CREATE_EXPENSE:
      create(payload.text);
      break;

    case BudgetConstants.ActionTypes.DELETE_EXPENSE:
      del(payload.id);
      break;

    default:
      return true;
  }

  ExpenseStore.emitChange();

  return true;
});

module.exports = ExpenseStore;
