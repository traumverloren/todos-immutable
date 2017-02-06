import Immutable from 'immutable';

// todos: in immutable.js arrays are lists :)
const defaultState = Immutable.Map({});

const filter = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return Immutable.Map({
        filter: action.filter
      })
    default:
      return state;
  }
}

export default filter
