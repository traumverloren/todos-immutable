import { takeEvery, call } from 'redux-saga/effects';
import meow from './cat_meow.wav';

const playSound = () => {
  const audio = new Audio(meow);
  audio.play();
}

// console logs on load, so we know that the sagas are wired up right
export function* helloSaga() {
  console.log('Hello Sagas! 😺');
}

// performs the add todo task
// play a 'tink' sound when todo added
export function* addTodoFlow() {
  yield call(playSound)
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
