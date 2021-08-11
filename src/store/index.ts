// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { apiMiddlewares } from './middlewares';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import storage from 'redux-persist/lib/storage';
const composeEnhancers =
  //@ts-ignore
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const configureStore = (defaultState: any, services: any) => {
  const api = services.get('api');
  //const storage = services.get('storage');
  const config = {
    key: 'ocrypto',
    storage,
  };

  const persistedReducer = persistReducer(config, rootReducer);
  const store = createStore(
    persistedReducer,
    defaultState,
    composeEnhancers(applyMiddleware(thunk, ...apiMiddlewares({ api })))
  );

  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
