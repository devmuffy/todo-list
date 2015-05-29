var React = require('react');
var PropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

module.exports = React.createClass({
  propTypes: {
    onSave: PropTypes.func.isRequired,
    value: PropTypes.string
  },

  getInitialState: function() {
    return {
      classes: [],
      value: this.props.value || ''
    };
  },

  render: function () {
    var classString = this.state.classes.join(' ');

    return (
      <input type="text" className={classString} onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value} />
    );
  },

  _onChange: function (event) {
    var newValue = event.target.value;
    if (this._isValueValid(newValue)) {
      this._clearInvalidClass();
    } else {
      this._setInvalidClass();
    }

    this.setState({ value: newValue });
  },

  _setInvalidClass: function () {
    var arr = this.state.classes;
    var index = arr.indexOf('invalid');
    if (index === -1) {
      arr.push('invalid');
      this.setState({ classes: arr });
    }
  },

  _clearInvalidClass: function () {
    var arr = this.state.classes;
    var index = arr.indexOf('invalid');
    if (index > -1) {
      arr.splice(index, 1);
      this.setState({ classes: arr });
    }
  },

  _onKeyDown: function(event) {
    var newValue = this.state.value;
    if (event.keyCode === ENTER_KEY_CODE) {
      if (this._isValueValid(newValue))
        this._save(newValue);
    }
  },

  _isValueValid: function (value) {
    var val = (value.trim()).length;

    if (20 > val && val > 3)
      return true;

    return false;
  },

  _save: function (value) {
    this.props.onSave(value);
    this.setState({
      classes: [],
      value: ''
    });
  }
});
