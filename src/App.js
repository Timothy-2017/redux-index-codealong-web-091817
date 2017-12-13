import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todos from './components/todos/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        <Todos store={this.props.store} />
      </div>
    );
  }
}

// passing store down as props to children

export default App;
