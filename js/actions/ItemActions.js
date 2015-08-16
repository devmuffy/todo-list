var Dispatcher = require('../lib/Dispatcher');
var AppConstants = require('../constants/AppConstants');

module.exports = {

  create: function (text) {
    Dispatcher.dispatch({
      actionType: AppConstants.ActionTypes.CREATE_EXPENSE,
      text: text
    });
  },

  delete: function (id) {
    Dispatcher.dispatch({
      actionType: AppConstants.ActionTypes.DELETE_EXPENSE,
      id: id
    });
  },

  load: function () {
    Dispatcher.dispatch({
      actionType: AppConstants.ActionTypes.LOAD
    });
  }

};
