class ScoreModel {
  #storage;

  constructor() {
    this.#storage = window.localStorage;
  }

  score(callback) {
    let score = {
      cards: this.#storage.getItem("stats.cards"),
      answers: {
        correct: this.#storage.getItem("stats.answers.correct"),
        wrong: this.#storage.getItem("stats.answers.wrong"),
      }
    }

    callback(score);
  }

  restartGame(callback) {
    callback();
  }
}

export default ScoreModel;
