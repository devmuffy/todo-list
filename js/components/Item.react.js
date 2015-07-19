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
      <div className="expense row">
        <div className="col-md-8">
          <p>{this.props.name}</p>
        </div>
        <div className="col-md-4">
          <button className="btn btn-block btn-danger" onClick={this._onClick}>Delete</button>
        </div>
      </div>
    );
  },

  _onClick: function () {
    this.props.onClick(this.props.id);
  }

});
