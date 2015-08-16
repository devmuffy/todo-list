(function () {
  'use strict';

  var App = require('./components/App.react.js');
  var ItemClient = require('./utils/ItemClient');
  var React = require('react');

  // Global scope for React DEV-TOOLS
  if (typeof window !== 'undefined') {
    window.React = React;
  }

  ItemClient.load();

  React.render(
      <App />,
      document.body
  );

}());
