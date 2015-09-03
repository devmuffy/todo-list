import App from './components/App.react';
import React from 'react';
import myApp from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ItemClient from './utils/ItemClient';

let store = createStore(myApp);

// Global scope for React DEV-TOOLS
if (typeof window !== 'undefined') {
  window.React = React;
}

store.subscribe(() => {
  ItemClient.save(store.getState().items);
});

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('app')
);
