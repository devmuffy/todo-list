import Dispatcher from '../lib/Dispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import ItemClient from '../utils/ItemClient';
import assign from 'lodash/object/assign';

const CHANGE_EVENT = 'change';

let _expensesLength = Object.keys(ItemClient.load()).length;
let add = () => _expensesLength++;
let sub = () => _expensesLength--;

let SummaryPaneStore = assign({}, EventEmitter.prototype, {

  get() {
    return _expensesLength;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

Dispatcher.register(function (payload) {
  switch(payload.actionType) {
    case AppConstants.ActionTypes.CREATE_EXPENSE:
      add();
      break;

    case AppConstants.ActionTypes.DELETE_EXPENSE:
      sub();
      break;

    default:
      return true;
  }

  SummaryPaneStore.emitChange();

  return true;
});

export default SummaryPaneStore;
