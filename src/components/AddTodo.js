import React from 'react';

// add a todo to the list. doesn't need any state passed down.
// only needs to dispatch the addToList action.

const AddTodo = ({addToList}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    addToList(todo);
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="todo" type="text"/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodo
