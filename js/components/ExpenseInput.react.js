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
      value: this.props.value || ''
    };
  },

  render: function () {
    return (
      <input type="text" onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value} />
    );
  },

  _onChange: function (event) {
      this.setState({
        value: event.target.value
      });
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  },

  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }
});
