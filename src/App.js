import React, { Component } from 'react';
import './App.css';
import AddTodoContainer from './components/AddTodoContainer';
import TodoListContainer from './components/TodoListContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Todos!</h2>
          <AddTodoContainer />
          <TodoListContainer />
          <Footer />
      </div>
    );
  }
}

export default App;
