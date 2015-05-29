var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({

  propTypes: {
    id: PropTypes.number,
    name: PropTypes.string
  },

  getDefaultProps: function () {
    return {
      name: 'empty name'
    };
  },

  render: function () {
    return (
      <div className="expense"><h1>{this.props.name}</h1> <button onClick={this._onClick}>Delete</button></div>
    );
  },

  _onClick: function () {
    this.props.onClick(this.props.id);
  }

});
