import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/_reset.scss';
import { Provider } from 'react-redux';
import './theme/styles.css';
import configureStore from './store';
import services from './services';
import config from './config';
import { PersistGate } from 'redux-persist/integration/react';

export type RootState = ReturnType<typeof store.getState>;
const servicesContainer = services(config);
const { store, persistor } = configureStore({}, servicesContainer);

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
