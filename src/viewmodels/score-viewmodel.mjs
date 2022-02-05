class ScoreViewModel {
  #model;
  #coordinatorDelegate;
  #viewDelegate;

  #score;

  constructor() {
    console.debug('ScoreViewModel.constructor()');
  }

  set score(value) {
    console.debug("ScoreViewModel.setScore()");
    console.debug(value);
    
    this.#score = value;
    this.#viewDelegate.didChangeScore();
  }
  
  get score() {
    if (this.#score == undefined) {
      let callback = function (score) {
        console.debug("ScoreViewModel.getScore() callback");
        console.debug(score);

        this.score = score;
      }.bind(this);

      this.#model.score(callback);
    }

    return this.#score; 
  }

  set model(value) { this.#model = value }
  set coordinatorDelegate(value) { this.#coordinatorDelegate = value }
  set viewDelegate(value) { this.#viewDelegate = value }

  restartGame() {
    console.debug('ScoreViewModel.restartGame()');

    let callback = function () {
      this.#coordinatorDelegate.scoreViewModelDidFinish();
    }.bind(this);

    this.#model.restartGame(callback);
  }
}

export default ScoreViewModel;
