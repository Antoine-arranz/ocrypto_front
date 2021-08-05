// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

import { apiMiddlewares } from "../middlewares";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, ...apiMiddlewares()))
);

export default store;
