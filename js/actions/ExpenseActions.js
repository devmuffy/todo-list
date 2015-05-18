var AppDispatcher = require('../dispatcher/AppDispatcher');
var Dispatcher = require('../lib/Dispatcher');

var ExpenseActions = {

  create: function (text) {
    AppDispatcher.handleViewAction({
      actionType: 'EXPENSE_CREATE',
      text: text
    });
  }

};

module.exports = ExpenseActions;
