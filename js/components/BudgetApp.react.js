var React = require('react');
var Expense = require('../components/Expense.react');
var ExpenseStore = require('../stores/ExpenseStore');

function getExpenses() {
  return {
    expenses: ExpenseStore.getAll()
  };
}

var BudgetApp = React.createClass({

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
      expenses.push(<Expense key={key} name={this.state.expenses[key].text} />);
    }

    return (
      <div>
        {expenses}
      </div>
    );
  },

  _onChange: function () {
    this.setState(getExpenses());
  }

});

module.exports = BudgetApp;
