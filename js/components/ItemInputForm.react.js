import React, { PropTypes } from 'react';

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
    const { btnClasses, inputGroupClasses } = this._getClasses();

    return (
      <div className={inputGroupClasses.join(' ')}>
        <input
          type="text"
          className="form-control"
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          value={this.state.inputValue}
          placeholder="Task name" />

        <div className="input-group-btn">
          <button
            type="submit"
            className={btnClasses.join(' ')}
            onClick={this._onSubmit}>
            Add
          </button>
        </div>
      </div>
    );
  },

  _getClasses() {
    const btnClasses = ['btn'];
    const inputGroupClasses = ['form-group', 'input-group'];

    if (this.state.isValueValid) {
      btnClasses.push('btn-success');
    } else {
      btnClasses.push('btn-danger');
      // inputGroupClasses.push('has-error');
    }

    return {
      btnClasses,
      inputGroupClasses
    };
  },

  _onChange(event) {
    const newValue = removeSpaces(event.target.value);
    const isValueValid = hasStringMatchingLength(newValue);

    this.setState({
      inputValue: newValue,
      isValueValid: isValueValid
    });
  },

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit();
    }
  },

  _onSubmit() {
    if (this.state.isValueValid) {
      this.setState(this.getInitialState());
      this.props.onSave(this.state.inputValue);
    }
  }

});

function removeSpaces(value) {
  return value.replace(/\s+/g, ' ');
}

function hasStringMatchingLength(value) {
  return (20 > value.length && value.length > 3);
}
