import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { removeMultipleSpaces, uuid } from '../utils/utils';

const ENTER_KEY_CODE = 13;

export default React.createClass({

  propTypes: {
    onSave: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      inputValue: '',
      isValueValid: false
    };
  },

  render() {
    const buttonClasses = {
      'btn': true,
      'btn-success': this.state.isValueValid,
      'btn-danger': toggleBool(this.state.isValueValid)
    };

    return (
      <div className="form-inline form-group">
        <input
          type="text"
          className="form-control"
          maxLength="20"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.inputValue}
          placeholder="Task name" />

        <button
          type="submit"
          className={classNames(buttonClasses)}
          onClick={this.handleClick}>
          <span className="glyphicon glyphicon-plus"></span> Add
        </button>
      </div>
    );
  },

  handleChange(event) {
    const newValue = removeMultipleSpaces(event.target.value);
    const isValueValid = hasStringMatchingLength(newValue);

    this.setState({
      inputValue: newValue,
      isValueValid: isValueValid
    });
  },

  handleClick() {
    if (this.state.isValueValid) {
      this.setState(this.getInitialState());
      this.props.onSave(uuid(), this.state.inputValue);
    }
  },

  handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleClick();
    }
  }

});

function toggleBool(value) {
  return ! value;
}

function hasStringMatchingLength(value) {
  return (20 > value.length && value.length > 3);
}
