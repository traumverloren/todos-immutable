import React from 'react';

const TodoList = ({todos}) => {
  console.log(todos[0].text);
  return (
    <div>
      {todos.map(todo => (<div>{todo.text}</div>))}
    </div>
  )
}

export default TodoList
