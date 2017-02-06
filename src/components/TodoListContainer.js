import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../actions';

const filtered = (todos, filter) => {
  switch(filter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(todo => todo.get('completed') === false);
    case 'DONE':
      return todos.filter(todo => todo.get('completed') === true);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filtered(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer
