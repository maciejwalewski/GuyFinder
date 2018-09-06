import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import styles from '../stylesheet.scss';
import { MainPage } from './MainPage';
import { GuyCreator } from './GuyCreator';



const reducer = (state = {
  counter: 0
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};



const peopleReducer = (people = {list:[], nextId: 0, currentPerson: 0}, action) => {
  switch (action.type) {
    case "SET_PERSON":
      const newPerson = people.list.concat(action.payload);  //create new array
      return {
        ...people,
        list: newPerson,
        nextId: people.nextId + 1
      };

    case "REMOVE_EMPLOYEE":
      function isIndex(value){
        return value.num !== action.payload;
      }

      if (confirm('Do You really want to delete ' + people.list[action.payload].name + '?')){
        let newList = people.list;
        newList = newList.filter(isIndex);
        
        return {
          ...people,
          list: newList,
          nextId: people.nextId
        };
      } else {
        console.log('to nie');
      }

    case "EDIT_EMPLOYEE":
      let editedList = people.list;
      let editedName = people.list[action.payload].name;
      let editedTitle = people.list[action.payload].title;
      let editedTech = people.list[action.payload].tech;

      editedName = action.namePayload;
      editedTitle = action.titlePayload;
      editedTech = action.techPayload;

      editedList[action.payload] = {
        name: editedName,
        title: editedTitle,
        tech: editedTech
      }


      return {
        ...people,
        list: editedList,
        currentPerson: action.payload
      }
  }
  return people;
};

const store = createStore(
  combineReducers({ reducer, peopleReducer }),
  {},
  applyMiddleware(createLogger())
);


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