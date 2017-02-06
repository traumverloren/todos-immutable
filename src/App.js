import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Todos!</h2>
          <AddTodo/>
      </div>
    );
  }
}

export default App;
