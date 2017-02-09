import { takeEvery } from 'redux-saga/effects'

// console logs on load, so we know that the sagas are wired up right
export function* helloSaga() {
  console.log('Hello Sagas! 😺');
}

// performs the add todo task
export function* addTodoFlow() {
  console.log("Yo, the Add todo awesomeness goes HERE")
}

// watches for new todo to be added
export function* watchAddTodo() {
  yield takeEvery('ADD_TODO', addTodoFlow)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchAddTodo()
  ]
}
