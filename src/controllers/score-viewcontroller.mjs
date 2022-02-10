class ScoreViewController {
  #viewModel;

  #document;
  #cardElement;

  constructor(document) {
    this.#document = document;
    this.#cardElement = document.querySelector("#score-card");
  }

  set viewModel(value) { this.#viewModel = value }

  viewModelDidChangeScore() {
    this.#renderScore(this.#viewModel.score);
  }

  renderView() {
    this.#armRestartButton();
    this.#renderScore(this.#viewModel.score);
  }

  #armRestartButton() {
    let button = this.#cardElement.querySelector("#score-card-restart-button");

    button.addEventListener("click", this.#didClickRestartButton.bind(this));
  }

  #didClickRestartButton(event) {
    this.#viewModel.restartGame();
  }

  #renderScore(score) {
    if (score == undefined) {
      return;
    }

    this.#displayTotal(score.cards);
    this.#displayCorrectAnswers(score.answers.correct);
    this.#displayWrongAnswers(score.answers.wrong);
  }

  #displayTotal(text) {
    let element = this.#cardElement.querySelector("#score-card-total");

    element.textContent = text;
  }

  #displayCorrectAnswers(text) {
    let element = this.#cardElement.querySelector("#score-card-correct");

    element.textContent = text;
  }

  #displayWrongAnswers(text) {
    let element = this.#cardElement.querySelector("#score-card-wrong");

    element.textContent = text;
  }
}

export default ScoreViewController;
