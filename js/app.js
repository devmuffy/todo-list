var React = require('react');

// Global scope for React DEV-TOOLS
if (typeof window !== 'undefined') {
  window.React = React;
}

var BudgetApp = require('./components/BudgetApp.react');
window.ExpenseActions = require('./actions/ExpenseActions');

React.render(
  <BudgetApp />,
  document.getElementById('BudgetApp')
);
