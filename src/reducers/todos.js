import Immutable from 'immutable';

// todos: in immutable.js arrays are lists :)
const defaultState = Immutable.List();

const todos = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return state.push(
        Immutable.Map({
          id: action.id,
          text: action.text,
          completed: false
        })
      )

    // this is a bit different for immutablejs.
    // must use .get to check the property 'id'
    // to update the completed field, use .set
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.get('id') !== action.id) {
          return todo
        };
        return todo.update('completed', completed => !completed);
      })
    default:
      return state;
  }
}


export default todos
