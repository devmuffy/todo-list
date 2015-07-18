(function () {
  'use strict';

  var React = require('react');
  var BudgetApp = require('./components/BudgetApp.react');

  // Global scope for React DEV-TOOLS
  if (typeof window !== 'undefined') {
    window.React = React;
  }

  React.render(
      <BudgetApp />,
      document.getElementById('BudgetApp')
  );

}());