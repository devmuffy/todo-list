(function () {
  'use strict';

  var React = require('react');
  var App = require('./components/App.react.js');

  // Global scope for React DEV-TOOLS
  if (typeof window !== 'undefined') {
    window.React = React;
  }

  React.render(
      <App />,
      document.body
  );

}());
