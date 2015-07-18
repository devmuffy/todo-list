var React = require('react');
var BudgetActions = require('../actions/BudgetActions');
var Expense = require('../components/Expense.react');
var ExpenseInput = require('../components/ExpenseInput.react');
var ExpenseStore = require('../stores/ExpenseStore');
var forEach = require('lodash/collection/forEach');

function getExpenses() {
  return {
    expenses: ExpenseStore.getAll()
  };
}

module.exports = React.createClass({

  getInitialState: function () {
    return getExpenses();
  },

  componentDidMount: function() {
    ExpenseStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ExpenseStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var that = this;
    var expenses = [];

    forEach(that.state.expenses, function (n, key) {
      expenses.push(
        <li className="list-group-item" key={key}>
          <Expense key={key} id={that.state.expenses[key].id} name={that.state.expenses[key].text} onClick={that._delete} />
        </li>
      );
    });

    return (
      <div className="playgroundpane">
        <h1 className="page-header">Playground</h1>
        <div><ExpenseInput onSave={this._save} /></div>
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
    BudgetActions.create(text);
  },

  _delete: function (id) {
    BudgetActions.delete(id);
  }

});
