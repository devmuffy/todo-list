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
    if (! this._isValueValid(event.target.value))
      this._setInvalidClass();
    else
      this._clearInvalidClass();

    this.setState({
      value: event.target.value
    });
  },

  _setInvalidClass: function () {
    this.state.classes.push('invalid');
    this.setState({
      classes: this.state.classes
    });
  },

  _clearInvalidClass: function () {
    console.log('calling');
    var arr = this.state.classes;
    var index = arr.indexOf('invalid');
    if (index > -1) {
      arr = arr.splice(i, 1);
      this.setState({
        classes: arr
      });
    }
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      if (this._isValueValid(this.state.value))
        this._save();
    }
  },

  _isValueValid: function (value) {
    var val = (value.trim()).length;

    if (20 > val && val > 3)
      return true;

    return false;
  },

  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }
});
