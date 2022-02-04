class ScoreViewController {
  #viewModel;

  #document;
  #cardElement;

  constructor(document) {
    console.debug("ScoreViewController.constructor()");
    
    this.#document = document;
  }

  set viewModel(value) { this.#viewModel = value }
  
  didChangeScore() {
    console.debug("ScoreViewController.didChangeScore()");
    console.debug(this.#viewModel.score);
    
    this.#renderScore(this.#viewModel.score);
  }

  renderView() {
    console.debug("ScoreViewController.renderView()");
    

    let template = this.#document.querySelector('#score-card-template');

    this.#cardElement = template.content.cloneNode(true)
                                        .querySelector("#score-card");

    let app = this.#document.querySelector('#app');
    app.replaceChildren(this.#cardElement);

    this.#armRestartButton();
    this.#renderScore(this.#viewModel.score);
  }

  #armRestartButton() {
    console.debug("ScoreViewController.#armNextButton()");
    
    let button = this.#cardElement.querySelector("#score-card-restart-button");
    
    button.addEventListener("click", this.#didClickRestartButton.bind(this));
  }

  #didClickRestartButton(event) {
    console.debug("ScoreViewController.#didClickRestartButton()");
    console.debug(event);

    this.#viewModel.restartGame();
  }

  #renderScore(score) {
    console.debug("ScoreViewController.#renderScore()");
    console.debug(score);

    this.#displayTotal(score.cards);
    this.#displayCorrectAnswers(score.answers.correct);
    this.#displayWrongAnswers(score.answers.wrong);
  }

  #displayTotal(text) {
    console.debug("ScoreViewController.#displayTotal()");
    
    let element = this.#cardElement.querySelector("#score-card-total");
    element.textContent = text;
  }

  #displayCorrectAnswers(text) {
    console.debug("ScoreViewController.#displayCorrectAnswers()");
    
    let element = this.#cardElement.querySelector("#score-card-correct");
    element.textContent = text;
  }

  #displayWrongAnswers(text) {
    console.debug("ScoreViewController.#displayWrongAnswers()");
    
    let element = this.#cardElement.querySelector("#score-card-wrong");
    element.textContent = text;
  }
}

export default ScoreViewController;
