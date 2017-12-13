import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo' // reducer
import createStore from './createStore' // store

let store = createStore(manageTodo) // creating a store by passing in reducer and setting = variable name store

export function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

// passing store to App and calling render method

store.dispatch({type: '@@INIT'})

// calling 'initial' dispatch on store by passing in '@@INIT' as initial action.type
