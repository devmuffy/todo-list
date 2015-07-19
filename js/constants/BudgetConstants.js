var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    LOAD: null,
    LOAD_SUCCESS: null,
    LOAD_FAIL: null,

    CREATE_EXPENSE: null,
    DELETE_EXPENSE: null
  })

};
