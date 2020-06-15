import Rps from './Rps'

describe('RPS', () => {
  test('wiring', () => {

    const result = new Rps().play('ROCK', 'PAPER')
    expect(result).toEqual('player 1 wins')
  })
})
