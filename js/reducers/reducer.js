import { combineReducers } from 'redux';
import { COMPLETE_ITEM, CREATE_ITEM, DELETE_ITEM } from '../actions/items';
import ItemClient from '../utils/ItemClient';

const initialState = ItemClient.load();

function items(state = initialState, action) {
  switch (action.type) {
  case COMPLETE_ITEM:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], { completed: true }),
      ...state.slice(action.index + 1)
    ];

  case CREATE_ITEM:
    return [
      ...state,
      { text: action.text }
    ];

  case DELETE_ITEM:
    return state.filter((item, index) =>
      index !== action.index
    );

  default:
    return state;
  }
}

const myApp = combineReducers({
  items
});

export default myApp;
