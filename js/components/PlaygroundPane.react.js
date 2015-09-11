import Item from '../components/Item.react';
import ItemInputForm from '../components/ItemInputForm.react';
import React, { PropTypes } from 'react';
import { VisiblityFilters } from '../actions/items';
const { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } = VisiblityFilters;

export default React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  },

  render() {
    return (
      <div className="playgroundpane">
        <h1 className="page-header">Playground</h1>
        <div className="row">
          <div className="col-sm-6">
            <ItemInputForm onSave={this.props.onSave} />
          </div>
          <div className="col-sm-6">
            {this.renderFilter(SHOW_ACTIVE, 'Active')}
            {this.renderFilter(SHOW_ALL, 'All')}
            {this.renderFilter(SHOW_COMPLETED, 'Completed')}
          </div>
        </div>
        <ul className="list-group">
          {this.props.items.map((item) =>
            <Item
              key={item.id}
              id={item.id}
              completed={item.completed}
              name={item.text}
              onCompleteClick={this.props.onComplete}
              onDeleteClick={this.props.onDelete} />
          )}
        </ul>
      </div>
    );
  },

  handleChange(event) {
    this.props.onFilterChange(event.target.value);
  },

  renderFilter(filter, name) {
    return (
      <label className="radio-inline">
        <input
          checked={this.props.filter === filter ? 'checked' : ''}
          type="radio"
          name="filters"
          defaultValue={filter}
          onChange={this.handleChange} /> {name}
      </label>
    );
  }

});
