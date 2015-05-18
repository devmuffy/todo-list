var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    var name = this.props.name || 'emptyName'

    return {
      name: name
    };
  },

  render: function () {
    return (
      <div className="expense"><h1>{this.state.name}</h1></div>
    );
  }
});
