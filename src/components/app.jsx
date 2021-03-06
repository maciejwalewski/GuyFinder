import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

import guyReducer from "./reducers/guyReducer";
import windowReducer from "./reducers/windowReducer";

import styles from "../stylesheet.scss";

import { MainPage } from "./MainPage";
import { GuyCreator } from "./GuyCreator";

const store = createStore(
  combineReducers({
    guyReducer,
    windowReducer
  }),
  {},
  applyMiddleware(createLogger())
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/creator/" component={GuyCreator} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
