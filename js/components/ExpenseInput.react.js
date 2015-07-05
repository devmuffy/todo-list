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

function duplicateArray(array) {
  return array.slice();
}

function pushUnique(arr, value) {
  if (arr.indexOf(value) === -1)
    arr.push(value);
}

function removeFromArray(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

function trimAndCheckLength(value) {
  var val = (value.trim()).length;

  if (20 > val && val > 3)
    return true;

  return false;
}

function updateClasses(arr, className, remove) {
  if (remove)
    pushUnique(arr, className);
  else
    removeFromArray(arr, className);
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
    var currentBtnClasses = this._updateBtnClasses(isValueValid);
    var currentInputGroupClasses = this._updateInputGroupClasses(isValueValid);

    this.setState({
      btnClasses: currentBtnClasses,
      inputGroupClasses: currentInputGroupClasses,
      inputValue: newValue
    });
  },

  _updateBtnClasses: function (isValueValid) {
    var arr = duplicateArray(this.state.btnClasses);

    updateClasses(arr, CLASSES.BTN.ERROR, !isValueValid);
    updateClasses(arr, CLASSES.BTN.SUCCESS, isValueValid);

    return arr;
  },

  _updateInputGroupClasses: function (isValueValid) {
    var arr = duplicateArray(this.state.inputGroupClasses);

    updateClasses(arr, CLASSES.INPUT_GROUP.ERROR, !isValueValid);

    return arr;
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit();
    }
  },

  _onSubmit: function () {
    var newValue = this.state.inputValue;

    if (trimAndCheckLength(newValue))
      this._save(newValue);
  },

  _save: function (value) {
    this.props.onSave(value);
    this.setState({
      btnClasses: CLASSES.BTN.DEFAULT,
      inputGroupClasses: CLASSES.INPUT_GROUP.DEFAULT,
      inputValue: ''
    });
  }
});
