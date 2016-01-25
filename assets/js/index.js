import App from './components/App.react';
import ItemClient from './utils/ItemClient';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

store.subscribe(() => { // TODO: remove
  ItemClient.save(store.getState().items);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
