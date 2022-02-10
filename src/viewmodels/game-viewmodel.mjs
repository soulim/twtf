class GameViewModel {
  #model;
  #coordinatorDelegate;
  #viewDelegate;

  #card;
  #next;

  constructor() {}

  set card(value) {
    this.#card = value;

    this.#viewDelegate.viewModelDidChangeCard();
  }

  get card() {
    if (this.#card != undefined) {
      return this.#card;
    }

    let callback = function (card) {
      this.card = card;
    }.bind(this);

    this.#model.card(callback);
  }

  set model(value) { this.#model = value }
  set coordinatorDelegate(value) { this.#coordinatorDelegate = value }
  set viewDelegate(value) { this.#viewDelegate = value }

  processAnswer(data) {
    let callback = function (answer, next) {
      this.#next = next;
      this.#viewDelegate.showAnswer(answer);
    }.bind(this);

    this.#model.processAnswer(data.answer, callback);
  }

  nextCard() {
    if (this.#next != undefined) {
      this.card = this.#next;
      this.#next = null;
    } else {
      this.#coordinatorDelegate.viewModelDidFinish();
    }
  }
}

export default GameViewModel;
