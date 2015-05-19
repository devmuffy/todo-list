var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
  propTypes: {
    name: PropTypes.string
  },

  getDefaultProps: function () {
    return {
      name: 'empty name'
    };
  },

  render: function () {
    return (
      <div className="expense"><h1>{this.props.name}</h1></div>
    );
  }
});
