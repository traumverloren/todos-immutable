import Immutable from 'immutable';

// todos: in immutable.js arrays are lists :)
const defaultState = Immutable.List();

const todos = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      // Return previous List + a new Map added with added info
    default:
      return state;
  }
}

export default todos
