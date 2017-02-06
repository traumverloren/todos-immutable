let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextTodoId++,
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
