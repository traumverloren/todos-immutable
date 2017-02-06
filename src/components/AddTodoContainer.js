import AddTodo from './AddTodo';
import { addTodo } from '../actions'
import { connect } from 'react-redux';

// no state, just dispatch?
const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (todo) => {
      dispatch(addTodo(todo))
    }
  }
}

const AddTodoContainer = connect(null,mapDispatchToProps)(AddTodo);

export default AddTodoContainer
