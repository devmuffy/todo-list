var React = require('react');
var BudgetActions = require('../actions/BudgetActions');
var Expense = require('../components/Expense.react');
var ExpenseInput = require('../components/ExpenseInput.react');
var ExpenseStore = require('../stores/ExpenseStore');

function getExpenses() {
  return {
    expenses: ExpenseStore.getAll()
  };
}

var PlaygroundPane = React.createClass({

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
    var expenses = [];

    for (var key in this.state.expenses) {
      expenses.push(<li className="list-group-item" key={key}><Expense key={key} id={this.state.expenses[key].id} name={this.state.expenses[key].text} onClick={this._delete} /></li>);
    }

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

module.exports = PlaygroundPane;
