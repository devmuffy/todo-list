import { combineReducers } from 'redux';
import { CREATE_ITEM, DELETE_ITEM } from '../actions/items';
import ItemClient from '../utils/ItemClient';

// const initialState = [
//   { completed: false, text: 'To jest pierwszy, wartosciowy todo.' },
//   { completed: true, text: 'test2' }
// ];
const initialState = ItemClient.load();

function items(state = initialState, action) {
  switch (action.type) {
  case CREATE_ITEM:
    return [...state, {
      text: action.text
    }];

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
