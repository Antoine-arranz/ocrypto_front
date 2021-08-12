import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import './styles/_reset.scss';
import { Provider } from 'react-redux';
import './theme/styles.css';
import configureStore from './store';

import services from './services';
import config from './config';
import { PersistGate } from 'redux-persist/integration/react';

const servicesContainer = services(config);
const { store, persistor } = configureStore({}, servicesContainer);
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
