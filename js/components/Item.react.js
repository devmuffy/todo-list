import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default React.createClass({

  propTypes: {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onCompleteClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  },

  render() {
    const listItemClasses = {
      'list-group-item': true,
      'disabled': this.props.completed
    };

    return (
      <li className={classNames(listItemClasses)}>
        <div className='expense row'>
          <div className="col-md-8">
            <p>{this.props.name}</p>
          </div>
          <div className="col-md-4">
            <div className="btn-group">
              <button className="btn btn-success" onClick={this.handleCompleteClick}>Complete</button>
              <button className="btn btn-warning" onClick={this.handleDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
      </li>
    );
  },

  handleCompleteClick() {
    this.props.onCompleteClick(this.props.id);
  },

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.id);
  }

});
