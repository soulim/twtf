class GameViewModel {
  #model;
  #coordinatorDelegate;
  #viewDelegate;

  #card;
  #next;

  constructor() {
    console.debug("GameViewModel.constructor()");
  }

  set card(value) {
    console.debug("GameViewModel.setCard()");
    console.debug(value);
    
    this.#card = value;
    this.#viewDelegate.didChangeCard();
  }

  get card() {
    if (this.#card == undefined) {
      let callback = function (card) {
        console.debug("GameViewModel.getCard() callback");
        console.debug(card);

        this.card = card;
      }.bind(this);

      this.#model.card(callback);
    }

    return this.#card; 
  }

  set model(value) { this.#model = value }
  set coordinatorDelegate(value) { this.#coordinatorDelegate = value }
  set viewDelegate(value) { this.#viewDelegate = value }

  processAnswer(data) {
    console.debug("GameViewModel.processAnswer()");

    let callback = function (answer, next) {
      console.debug("GameViewModel.processAnswer() callback");
      console.debug(next);

      this.#next = next;
      this.#viewDelegate.showAnswer(answer);
    }.bind(this);

    this.#model.processAnswer(data.answer, callback);
  }

  nextCard() {
    console.debug("GameViewModel.nextCard()");

    if (this.#next != undefined) {
      this.card = this.#next;
      this.#next = null;
    } else {
      this.#coordinatorDelegate.gameViewModelDidFinish();
    }
  }
}

export default GameViewModel;
