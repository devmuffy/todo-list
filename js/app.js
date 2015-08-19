import App from './components/App.react';
import ItemClient from './utils/ItemClient';
import React from 'react';

// Global scope for React DEV-TOOLS
if (typeof window !== 'undefined') {
  window.React = React;
}

ItemClient.load();

React.render(
  <App />,
  document.body
);
