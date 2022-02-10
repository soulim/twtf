class WelcomeViewModel {
  #model;
  #coordinatorDelegate;
  #viewDelegate

  constructor() {}

  set model(value) { this.#model = value }
  set coordinatorDelegate(value) { this.#coordinatorDelegate = value }
  set viewDelegate(value) { this.#viewDelegate = value }

  startGame() {
    let callback = function () {
      this.#coordinatorDelegate.viewModelDidFinish();
    }.bind(this);

    this.#model.startGame(callback);
  }
}

export default WelcomeViewModel;
