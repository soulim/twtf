class WelcomeViewController {
  #viewModel;

  #document;
  #cardElement;

  constructor(document) {
    this.#document = document;
    this.#cardElement = document.querySelector("#welcome-card");
  }

  set viewModel(value) { this.#viewModel = value }

  renderView() {
    this.#armStartButton();
  }

  #armStartButton() {
    let button = this.#cardElement.querySelector("#welcome-card-start-button");

    button.addEventListener("click", this.#didClickStartButton.bind(this));
  }

  #didClickStartButton(event) {
    this.#viewModel.startGame();
  }
}

export default WelcomeViewController;
