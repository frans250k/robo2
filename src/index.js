import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import App from "./containers/App";
import { searchRobots } from './reducers';
import "../public/index.css";
import "tachyons";

const logger = createLogger()

const store = createStore(searchRobots, applyMiddleware(logger)) 


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById("root"));
