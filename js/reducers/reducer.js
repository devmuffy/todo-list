import { combineReducers } from 'redux';
import { CREATE_ITEM, DELETE_ITEM } from './actions/app';

const initialState = [];

function items(state = initialState, action) {
  switch (action.type) {
  case CREATE_ITEM:
    return [...state, {
      text: action.text
    }];
    break;

  default:
    return state;
  }
}

const myApp = combineReducers({
  items
});

export default myApp;
