export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER';

export const VisiblityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function completeItem(index) {
  return { type: COMPLETE_ITEM, index };
}

export function createItem(item) {
  return { type: CREATE_ITEM, item };
}

export function deleteItem(index) {
  return { type: DELETE_ITEM, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBLITY_FILTER, filter };
}
