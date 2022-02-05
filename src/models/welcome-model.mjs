class WelcomeModel {
  #storage;

  constructor() {
    console.debug('WelcomeModel.constructor()');
    
    this.#storage = window.localStorage;
  }
  
  startGame(callback) {
    console.debug('WelcomeModel.gameStart()');

    this.#storage.setItem("stats.cards", 0);
    this.#storage.setItem("stats.answers.correct", 0);
    this.#storage.setItem("stats.answers.wrong", 0);
    
    callback();
  }
}

export default WelcomeModel;
