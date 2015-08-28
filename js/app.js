import App from './components/App.react';
import React from 'react';
import myApp from './reducers/reducer';
import { createStore } from 'redux';

let store = createStore(myApp);

// Global scope for React DEV-TOOLS
if (typeof window !== 'undefined') {
  window.React = React;
}

React.render(
  <App store={store} />,
  document.body
);
