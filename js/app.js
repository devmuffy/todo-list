import App from './components/App.react';
import ItemClient from './utils/ItemClient';
import React from 'react';
import reducer from './reducers/index';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reducer);

store.subscribe(() => { // TODO: remove
  ItemClient.save(store.getState().items);
});

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>

    <DebugPanel top right bottom>
      <DevTools
        store={store}
        monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('app')
);
