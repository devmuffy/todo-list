export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function completeItem(index) {
  return { type: COMPLETE_ITEM, index };
}

export function createItem(text) {
  return { type: CREATE_ITEM, text };
}

export function deleteItem(index) {
  return { type: DELETE_ITEM, index };
}
