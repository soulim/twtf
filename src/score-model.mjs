class ScoreModel {
  #storage;

  constructor() {
    console.debug("ScoreModel.constructor()");
    
    this.#storage = window.localStorage;
  }

  score(callback) {
    console.debug("ScoreModel.getScore()");
    
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
    console.debug("ScoreModel.restartGame()");

    callback();
  }
}

export default ScoreModel;
