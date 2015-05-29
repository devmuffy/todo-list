var AppDispatcher = require('../dispatcher/AppDispatcher');
var BudgetConstants = require('../constants/BudgetConstants');

var BudgetActions = {

  create: function (text) {
    AppDispatcher.handleViewAction({
      actionType: BudgetConstants.ActionTypes.CREATE_EXPENSE,
      text: text
    });
  },

  delete: function (id) {
    AppDispatcher.handleViewAction({
      actionType: BudgetConstants.ActionTypes.DELETE_EXPENSE,
      id: id
    });
  }

};

module.exports = BudgetActions;
