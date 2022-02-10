class GameViewController {
  #viewModel;

  #document;
  #cardElement;
  #optionElement;

  constructor(document) {
    this.#document = document;
    this.#cardElement = document.querySelector("#game-card");
  }

  set viewModel(value) { this.#viewModel = value }

  viewModelDidChangeCard() {
    this.#renderCard(this.#viewModel.card);
  }

  showAnswer(answer) {
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
    this.#armNextButton();
    this.#renderCard(this.#viewModel.card);
  }

  #armNextButton() {
    let button = this.#cardElement.querySelector("#game-card-next-button");

    button.addEventListener("click", this.#didClickNextButton.bind(this), false);
  }

  #renderCard(card) {
    if (card == undefined) {
      return;
    }

    this.#displayImage(card.image.url);
    // this.#displayAudio(card.audio.url);
    this.#displayTitle(card.title);
    this.#displayDesciption(card.description);
    this.#displayOptions(card.options);
    this.#disableNextButton();
  }

  #displayImage(url) {
    let image = this.#cardElement.querySelector("#game-card-image");

    image.src = url;
  }

  #displayAudio(url) {
    let audio = this.#cardElement.querySelector("#game-card-audio");

    audio.src = url;
    audio.load();
  }

  #displayTitle(text) {
    let title = this.#cardElement.querySelector("#game-card-title");

    title.textContent = text;
  }

  #displayDesciption(text) {
    let description = this.#cardElement.querySelector("#game-card-description");

    description.textContent = text;
  }

  #displayOptions(options) {
    let template = this.#document.querySelector('#game-card-option-template');
    let master = template.content.cloneNode(true)
                                 .querySelector(".game-card-option-button")

    let buttons = options.map(function (option) {
      let button = master.cloneNode(true);
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
    this.#disableOptionButtons();
    this.#viewModel.processAnswer(event.currentTarget.dataset);
  }

  #disableOptionButtons() {
    let buttons = this.#cardElement.querySelectorAll("#game-card-options .game-card-option-button");

    buttons.forEach(function (button) {
      button.disabled = true;
    });
  }

  #disableNextButton() {
    let button = this.#cardElement.querySelector("#game-card-next-button");

    button.disabled = true;
  }

  #enableNextButton() {
    let button = this.#cardElement.querySelector("#game-card-next-button");

    button.disabled = false;
  }

  #didClickNextButton(event) {
    this.#viewModel.nextCard();
  }
}

export default GameViewController;
