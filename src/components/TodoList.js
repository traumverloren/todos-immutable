import React from 'react';

const TodoList = ({todos, onClick}) => {
  return (
    <div>
      {todos.map(todo => (<div style={{cursor: 'pointer', textDecoration: todo.get('completed')? 'line-through' : 'none' }}
        onClick={() => onClick(todo.get('id'))} key={todo.get('id')}>{todo.get('text')}</div>))}
    </div>
  )
}

export default TodoList
