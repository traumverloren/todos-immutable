import * as actions from './index';

describe('actions', () => {
  it('should create an action to create a todo', () => {
    const text = "wash the doggos";
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to toggle a todo', () => {
    const id = 0;
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 0
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to set a filter', () => {
    const filter = 'ACTIVE';
    const expectedAction = {
      type: 'SET_FILTER',
      filter
    }
    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })
})
