import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import peopleReducer from './reducer';

import styles from '../stylesheet.scss';

import { MainPage } from './MainPage';
import { GuyCreator } from './GuyCreator';

const store = createStore(
  peopleReducer,
  applyMiddleware(createLogger())
)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/creator/' component={GuyCreator} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}