var React = require('react');
var PropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;
var CLASSES = {
  BTN: {
    DEFAULT: ['btn'],
    ERROR: 'btn-danger',
    SUCCESS: 'btn-success'
  },
  INPUT_GROUP: {
    DEFAULT: ['form-group', 'input-group'],
    ERROR: 'has-error'
  }
};

function toggleBool(bool) {
  return ! bool;
}

function duplicateArray(array) {
  return array.slice();
}

function pushUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}

function removeFromArray(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }
}

/**
 * @param value {string}
 * @returns {boolean}
 */
function trimAndCheckLength(value) {
  var val = (value.trim()).length;

  return (20 > val && val > 3);
}

/**
 * @param arr {Array}
 * @param className {String}
 * @param state {Boolean}
 */
function addOrRemoveClass(arr, className, state) {
  if (state === true) {
    pushUnique(arr, className);
  } else {
    removeFromArray(arr, className);
  }
}

module.exports = React.createClass({

  propTypes: {
    onSave: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      btnClasses: CLASSES.BTN.DEFAULT,
      inputGroupClasses: CLASSES.INPUT_GROUP.DEFAULT,
      inputValue: ''
    };
  },

  render: function () {
    var btnClassesString = this.state.btnClasses.join(' ');
    var inputGroupClassesString = this.state.inputGroupClasses.join(' ');

    return (
      <div className={inputGroupClassesString}>
        <input type="text" className="form-control" onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.inputValue} placeholder="Nazwa" />
        <div className="input-group-btn">
          <button type="submit" className={btnClassesString} onClick={this._onSubmit}>Add</button>
        </div>
      </div>
    );
  },

  _onChange: function (event) {
    var newValue = event.target.value;
    var isValueValid = trimAndCheckLength(newValue);

    this.setState({
      btnClasses: this._getUpdatedBtnClasses(isValueValid),
      inputGroupClasses: this._getUpdatedInputGroupClasses(isValueValid),
      inputValue: newValue
    });
  },

  _getUpdatedBtnClasses: function (isValid) {
    var arr = duplicateArray(this.state.btnClasses);

    addOrRemoveClass(arr, CLASSES.BTN.ERROR, toggleBool(isValid));
    addOrRemoveClass(arr, CLASSES.BTN.SUCCESS, isValid);

    return arr;
  },

  _getUpdatedInputGroupClasses: function (isValid) {
    var arr = duplicateArray(this.state.inputGroupClasses);

    addOrRemoveClass(arr, CLASSES.INPUT_GROUP.ERROR, toggleBool(isValid));

    return arr;
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit();
    }
  },

  _onSubmit: function () {
    var newValue = this.state.inputValue;

    if (trimAndCheckLength(newValue)) {
      this._save(newValue);
    }
  },

  _save: function (value) {
    this.setState({
      btnClasses: CLASSES.BTN.DEFAULT,
      inputGroupClasses: CLASSES.INPUT_GROUP.DEFAULT,
      inputValue: ''
    });

    this.props.onSave(value);
  }

});
