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
      console.log(state);
    default:
      return state;
  }
}

export default todos
