import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { enableES5 } from 'immer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { SettingsProvider } from './context/SettingsContext';
import { restoreSettings } from './utils/settings';
import configureStore from './redux/store';

enableES5();

const store = configureStore();
const settings = restoreSettings();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <App store={store} />
      </SettingsProvider>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.unregister();
