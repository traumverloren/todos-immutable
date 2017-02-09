import { takeEvery, call } from 'redux-saga/effects';
import meow from './cat_meow.wav';
import scream from './cat_scream.wav';

const playSound = (soundFile) => {
  const audio = new Audio(soundFile);
  audio.play();
}

// console logs on load, so we know that the sagas are wired up right
export function* helloSaga() {
  console.log('Hello Sagas! 😺');
}

// performs the add todo effects task
// play a 'meow' sound when todo added
export function* addTodoFlow() {
  console.log('😺 MEEEOOOOOOW 😺');
  yield call(playSound, meow);
}

// performs the toggle todo efffects task
// play a 'cat scream' sound when todo added
export function* toggleTodoFlow() {
  console.log('😼 MEOOOOARRRRGHHH 😼');
  yield call(playSound, scream);
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    yield takeEvery('ADD_TODO', addTodoFlow),
    yield takeEvery('TOGGLE_TODO', toggleTodoFlow),
  ]
}
