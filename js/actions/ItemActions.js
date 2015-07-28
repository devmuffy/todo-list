var Dispatcher = require('../lib/Dispatcher');
var ItemConstants = require('../constants/ItemConstants');

module.exports = {

  create: function (text) {
    Dispatcher.dispatch({
      actionType: ItemConstants.ActionTypes.CREATE_EXPENSE,
      text: text
    });
  },

  delete: function (id) {
    Dispatcher.dispatch({
      actionType: ItemConstants.ActionTypes.DELETE_EXPENSE,
      id: id
    });
  }

};
