var React = require('react');
var Item = require('../components/Item.react');
var ItemActions = require('../actions/ItemActions');
var ItemInputForm = require('../components/ItemInputForm.react');
var ItemStore = require('../stores/ItemStore');
var forEach = require('lodash/collection/forEach');

function getExpenses() {
  return {
    expenses: ItemStore.getAll()
  };
}

module.exports = React.createClass({

  getInitialState: function () {
    return getExpenses();
  },

  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var that = this;
    var expenses = [];

    forEach(that.state.expenses, function (n, key) {
      expenses.push(
        <li className="list-group-item" key={key}>
          <Item key={key} id={that.state.expenses[key].id} name={that.state.expenses[key].text} onClick={that._delete} />
        </li>
      );
    });

    return (
      <div className="playgroundpane">
        <h1 className="page-header">Playground</h1>
        <div>
          <ItemInputForm onSave={this._save} />
        </div>
        <ul className="list-group">
          {expenses}
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState(getExpenses());
  },

  _save: function (text) {
    ItemActions.create(text);
  },

  _delete: function (id) {
    ItemActions.delete(id);
  }

});
