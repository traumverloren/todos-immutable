import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.toJS()
  }
}

const TodoListContainer = connect(mapStateToProps, null)(TodoList);

export default TodoListContainer
