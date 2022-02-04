class WelcomeViewModel {
  #model;
  #coordinatorDelegate;
  #viewDelegate

  constructor() {
    console.debug('WelcomeViewModel.constructor()');
  }

  set model(value) { this.#model = value }
  set coordinatorDelegate(value) { this.#coordinatorDelegate = value }
  set viewDelegate(value) { this.#viewDelegate = value }

  startGame() {
    console.debug('WelcomeViewModel.startGame()');

    let callback = function () {
      this.#coordinatorDelegate.welcomeViewModelDidStartGame();
    }.bind(this);

    this.#model.startGame(callback);
  }
}

export default WelcomeViewModel;
