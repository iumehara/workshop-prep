import {ViewObserverSpy} from './RPS.test'

class Rps {
  private viewObserver: ViewObserverSpy

  constructor(viewObserver: ViewObserverSpy) {
    this.viewObserver = viewObserver
  }

  play(p1Hand: string, p2Hand: string) {
    this.viewObserver.p1Wins()
  }
}

export default Rps