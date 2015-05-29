var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var BudgetConstants = require('../constants/BudgetConstants');
var assign = require('lodash/object/assign');

var CHANGE_EVENT = 'change';

var _expensesLength = 0;

function add() {
  _expensesLength++;
}

function sub() {
  _expensesLength--;
}

var SummaryPaneStore = assign({}, EventEmitter.prototype, {

  getExpensesLength: function () {
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

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.actionType) {
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
