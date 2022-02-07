class GameViewController {
  #viewModel;
  #view; // TODO: Remove field.

  #document;
  #cardElement;
  #optionElement;

  constructor(document) {
    console.debug("GameViewController.constructor()");

    this.#document = document;
  }

  set viewModel(value) { this.#viewModel = value }

  didChangeCard() {
    console.debug("GameViewController.didChangeCard()");
    console.debug(this.#viewModel.card);

    this.#renderCard(this.#viewModel.card);
  }

  showAnswer(answer) {
    console.debug("GameViewController.showAnswer()");

    let buttons = this.#cardElement.querySelectorAll("#game-card-options .game-card-option-button");

    buttons.forEach(function (button) {
      if (button.dataset.answer === this.#viewModel.card.answer) {
        let label = button.querySelector(".game-card-option-label");
        label.classList.replace("bg-info", "bg-success");
      } else if (button.dataset.answer === answer) {
        let label = button.querySelector(".game-card-option-label");
        label.classList.replace("bg-info", "bg-danger");
      }
    }.bind(this));

    this.#enableNextButton();
  }

  renderView() {
    console.debug("GameViewController.renderView()");

    let cardTemplate = this.#document.querySelector('#game-card-template');
    let optionTemplate = this.#document.querySelector('#game-card-option-template');

    this.#cardElement = cardTemplate.content.cloneNode(true)
                                            .querySelector("#game-card");
    this.#optionElement = optionTemplate.content.cloneNode(true)
                                                .querySelector(".game-card-option-button");

    let app = this.#document.querySelector('#app');
    app.replaceChildren(this.#cardElement);

    this.#armNextButton();
    this.#renderCard(this.#viewModel.card);
  }

  #armNextButton() {
    console.debug("GameViewController.#armNextButton()");

    let button = this.#cardElement.querySelector("#game-card-next-button");

    button.addEventListener("click", this.#didClickNextButton.bind(this), false);
  }

  #renderCard(card) {
    console.debug("GameViewController.renderCard()");

    this.#displayImage(card.image.url);
    // this.#displayAudio(card.audio.url);
    this.#displayTitle(card.title);
    this.#displayDesciption(card.description);
    this.#displayOptions(card.options);
    this.#disableNextButton();
  }

  #displayImage(url) {
    console.debug("GameViewController.displayImage()");

    let image = this.#cardElement.querySelector("#game-card-image");
    image.src = url;
  }

  #displayAudio(url) {
    console.debug("GameViewController.displayAudio()");

    let audio = this.#cardElement.querySelector("#game-card-audio");
    audio.src = url;
    audio.load();
  }

  #displayTitle(text) {
    console.debug("GameViewController.displayTitle()");

    let title = this.#cardElement.querySelector("#game-card-title");
    title.textContent = text;
  }

  #displayDesciption(text) {
    console.debug("GameViewController.displayDesciption()");

    let description = this.#cardElement.querySelector("#game-card-description");
    description.textContent = text;
  }

  #displayOptions(options) {
    console.debug("GameViewController.displayOptions()");


    let buttons = options.map(function (option) {
      let button = this.#optionElement.cloneNode(true);
      let label = button.querySelector(".game-card-option-label");
      let title = button.querySelector(".game-card-option-title");

      label.textContent = option.id;
      title.textContent = option.title;

      button.dataset.answer = option.id;
      button.addEventListener("click", this.#didClickOptionButton.bind(this), false);

      return button;
    }.bind(this));

    this.#cardElement.querySelector("#game-card-options")
                     .replaceChildren(...buttons);
  }

  #didClickOptionButton(event) {
    console.debug("GameViewController.#didClickOptionButton()");
    console.debug(event.currentTarget);

    // Disable buttons.
    let buttons = this.#cardElement.querySelectorAll("#game-card-options .game-card-option-button");

    buttons.forEach(function (button) {
      button.disabled = true;
    });

    this.#viewModel.processAnswer(event.currentTarget.dataset);
  }

  #disableNextButton() {
    console.debug("GameViewController.#disableNextButton()");

    let button = this.#cardElement.querySelector("#game-card-next-button");

    button.disabled = true;
  }

  #enableNextButton() {
    console.debug("GameViewController.#enableNextButton()");

    let button = this.#cardElement.querySelector("#game-card-next-button");

    button.disabled = false;
  }

  #didClickNextButton(event) {
    console.debug("GameViewController.#didClickNextButton()");
    console.debug(event.currentTarget);

    this.#viewModel.nextCard();
  }
}

export default GameViewController;
