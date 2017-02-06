import React from 'react';

const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map(todo => (<div key={todo.id}>{todo.text}</div>))}
    </div>
  )
}

export default TodoList
