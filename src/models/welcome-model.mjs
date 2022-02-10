class WelcomeModel {
  #storage;

  constructor() {
    this.#storage = window.localStorage;
  }

  startGame(callback) {
    this.#storage.setItem("stats.cards", 0);
    this.#storage.setItem("stats.answers.correct", 0);
    this.#storage.setItem("stats.answers.wrong", 0);

    callback();
  }
}

export default WelcomeModel;
