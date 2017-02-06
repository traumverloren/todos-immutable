import React, { Component } from 'react';
import './App.css';
import AddTodoContainer from './components/AddTodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Todos!</h2>
          <AddTodoContainer />
      </div>
    );
  }
}

export default App;
