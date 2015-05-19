var React = require('react');

// Global scope for React DEV-TOOLS
if (typeof window !== 'undefined') {
  window.React = React;
}

var BudgetApp = require('./components/BudgetApp.react');
window.BudgetActions = require('./actions/BudgetActions');

React.render(
  <BudgetApp />,
  document.getElementById('BudgetApp')
);
