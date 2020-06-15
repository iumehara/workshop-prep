import ViewObserver from './ViewObserver'

class Rps {
  play(viewObserver: ViewObserver, p1Hand: string, p2Hand: string) {
    viewObserver.p1Wins()
  }
}

export default Rps