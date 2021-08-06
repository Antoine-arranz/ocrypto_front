// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

import { apiMiddlewares } from "./middlewares";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (defaultState:any, services:any) =>{
  const api = services.get('api');
  const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(thunk, ...apiMiddlewares({api})))
  );

  return store
  

}

export default configureStore
