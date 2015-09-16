import { combineReducers } from 'redux';
import { items, nameFilter, visiblityFilter } from '../reducers/items';

export default combineReducers({
  nameFilter,
  items,
  visiblityFilter
});
