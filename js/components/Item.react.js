import React, { PropTypes } from 'react';

export default React.createClass({

  propTypes: {
    id: PropTypes.number,
    name: PropTypes.string,
    completed: PropTypes.bool
  },

  getDefaultProps() {
    return {
      name: 'empty name'
    };
  },

  render() {
    const isCompleted = 'list-group-item ' + (this.props.completed ? 'disabled' : '');

    return (
      <li className={isCompleted}>
        <div className='expense row'>
          <div className="col-md-8">
            <p>{this.props.name}</p>
          </div>
          <div className="col-md-4">
            <button className="btn btn-block btn-danger" onClick={this._onClick}>Delete</button>
          </div>
        </div>
      </li>
    );
  },

  _onClick() {
    this.props.onClick(this.props.id);
  }

});
