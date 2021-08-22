import { createStore, compose, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { apiMiddlewares } from './middlewares';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const composeEnhancers = composeWithDevTools;

const configureStore = (defaultState: any, services: any) => {
  const api = services.get('api');
  const config = {
    key: 'ocrypto',
    storage,
  };

  const persistedReducer = persistReducer(config, rootReducer);
  console.log(persistedReducer);
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, ...apiMiddlewares({ api })))
  );

  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
