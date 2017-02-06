import todos from './todos';
import filter from './filter';
import Immutable from 'immutable'

describe('todo reducer', () => {
  it('should return the initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual(Immutable.List())
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos(undefined, {
        type: 'ADD_TODO',
        id: 0,
        text: 'feed doggos'
      })
    ).toEqual(Immutable.List.of(
      Immutable.Map({
        id: 0,
        text: 'feed doggos',
        completed: false
      })
    ))
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(Immutable.List.of(
              Immutable.Map({
                id: 0,
                text: 'feed doggos',
                completed: false
              })
      ), {
        type: 'TOGGLE_TODO',
        id: 0
      })
    ).toEqual(Immutable.List.of(
      Immutable.Map({
        id: 0,
        text: 'feed doggos',
        completed: true
      })
    ))
  })
})

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(
      filter(undefined, {})
    ).toEqual('ALL')
  })

  it('should handle SET_FILTER', () => {
    expect(
      filter('ALL', {
        type: 'SET_FILTER',
        filter: 'ACTIVE'
      })
    ).toEqual('ACTIVE')
  })
})
