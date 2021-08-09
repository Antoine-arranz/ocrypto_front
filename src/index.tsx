import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/_reset.scss";
import { Provider } from "react-redux";

import  configureStore  from './store';

import services from './services';
import config from './config';

const servicesContainer = services(config);
const store = configureStore({}, servicesContainer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
