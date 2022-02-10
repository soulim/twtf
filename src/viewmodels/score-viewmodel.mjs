class ScoreViewModel {
  #model;
  #coordinatorDelegate;
  #viewDelegate;

  #score;

  constructor() {
  }

  set score(value) {
    this.#score = value;

    this.#viewDelegate.viewModelDidChangeScore();
  }

  get score() {
    if (this.#score != undefined) {
      return this.#score;
    }

    let callback = function (score) {
      this.score = score;
    }.bind(this);

    this.#model.score(callback);
  }

  set model(value) { this.#model = value }
  set coordinatorDelegate(value) { this.#coordinatorDelegate = value }
  set viewDelegate(value) { this.#viewDelegate = value }

  restartGame() {
    let callback = function () {
      this.#coordinatorDelegate.viewModelDidFinish();
    }.bind(this);

    this.#model.restartGame(callback);
  }
}

export default ScoreViewModel;
