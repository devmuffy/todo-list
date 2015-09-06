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
            <div className="btn-group">
              <button className="btn btn-success" onClick={this._onCompleteClick}>Complete</button>
              <button className="btn btn-warning" onClick={this._onDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
      </li>
    );
  },

  _onCompleteClick() {
    this.props.onCompleteClick(this.props.id);
  },

  _onDeleteClick() {
    this.props.onDeleteClick(this.props.id);
  }

});
