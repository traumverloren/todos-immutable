import test from 'tape';
import { addTodoFlow, playSound } from './sagas';
import { call } from 'redux-saga/effects';
import meow from './cat_meow.wav';

test('addTodoFlow Saga test', (assert) => {
  const gen = addTodoFlow();

  assert.deepEqual(
    gen.next().value,
    call(playSound, meow),
    'addTodoFlow must call playsound with meow audio file'
  )

  assert.deepEqual(
  gen.next(),
  { done: true, value: undefined},
  'addTodoFlow Saga must be done'
)

assert.end()
})
