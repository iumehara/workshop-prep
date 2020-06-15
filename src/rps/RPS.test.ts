import Rps from './Rps'
import ViewObserver from './ViewObserver'

export class ViewObserverSpy implements ViewObserver{
  p1WinsWasCalled: boolean

  constructor() {
    this.p1WinsWasCalled = false
  }

  p1Wins() {
    this.p1WinsWasCalled = true
  }
}

describe('RPS', () => {
  test('wiring', () => {

    const spy = new ViewObserverSpy()
    const result = new Rps(spy).play('ROCK', 'PAPER')

    expect(spy.p1WinsWasCalled).toEqual(true)
  })
})
