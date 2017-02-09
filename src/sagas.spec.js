import { addTodoFlow, toggleTodoFlow, playSound } from './sagas';
import { call } from 'redux-saga/effects';
import meow from './cat_meow.wav';
import scream from './cat_scream.wav';

describe('addTodoFlow saga', () => {
  const gen = addTodoFlow();

  it('should call playsound with meow audio', () => {
    expect(gen.next().value)
      .toEqual(call(playSound, meow))
  })

  it('should finish', () => {
    expect(gen.next())
      .toEqual(
        { done: true, value: undefined }
      )
  })
})

describe('toggleTodoFlow saga', () => {
  const gen = toggleTodoFlow();

  it('should call playsound with cat scream audio', () => {
    expect(gen.next().value)
      .toEqual(call(playSound, scream))
  })

  it('should finish', () => {
    expect(gen.next())
      .toEqual(
        { done: true, value: undefined }
      )
  })
})
