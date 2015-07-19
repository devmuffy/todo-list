var Dispatcher = require('../lib/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var BudgetConstants = require('../constants/BudgetConstants');
var ItemClient = require('../client/ItemClient');
var assign = require('lodash/object/assign');

var CHANGE_EVENT = 'change';
console.info(ItemClient.load());
var _expensesLength = Object.keys(ItemClient.load()).length;

function add() {
  _expensesLength++;
}

function sub() {
  _expensesLength--;
}

var SummaryPaneStore = assign({}, EventEmitter.prototype, {

  get: function () {
    return _expensesLength;
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
      add();
      break;

    case BudgetConstants.ActionTypes.DELETE_EXPENSE:
      sub();
      break;

    default:
      return true;
  }

  SummaryPaneStore.emitChange();

  return true;
});

module.exports = SummaryPaneStore;
