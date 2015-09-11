import { combineReducers } from 'redux';
import { COMPLETE_ITEM, CREATE_ITEM, DELETE_ITEM, SET_VISIBLITY_FILTER, VisiblityFilters } from '../actions/items';
import ItemClient from '../utils/ItemClient';

const { SHOW_ALL } = VisiblityFilters;
const initialState = ItemClient.load();

function visiblityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
  case SET_VISIBLITY_FILTER:
    return action.filter;

  default:
    return state;
  }
}

function items(state = initialState, action) {
  switch (action.type) {
  case COMPLETE_ITEM:
    return state.map((item) => {
      if (item.id === action.index) {
        return Object.assign(item, { completed: true });
      }

      return item;
    });

  case CREATE_ITEM:
    return [
      ...state,
      { completed: false, id: action.item.id, text: action.item.text }
    ];

  case DELETE_ITEM:
    return state.filter((item) => item.id !== action.index);

  default:
    return state;
  }
}

export default combineReducers({
  items,
  visiblityFilter
});
