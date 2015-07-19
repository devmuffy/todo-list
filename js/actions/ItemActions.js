var Dispatcher = require('../lib/Dispatcher');
var BudgetConstants = require('../constants/BudgetConstants');

module.exports = {

  create: function (text) {
    Dispatcher.dispatch({
      actionType: BudgetConstants.ActionTypes.CREATE_EXPENSE,
      text: text
    });
  },

  delete: function (id) {
    Dispatcher.dispatch({
      actionType: BudgetConstants.ActionTypes.DELETE_EXPENSE,
      id: id
    });
  }

};
