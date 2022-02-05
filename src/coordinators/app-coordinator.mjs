import WelcomeCoordinator from "./welcome-coordinator.mjs";
import GameCoordinator from "./game-coordinator.mjs";
import ScoreCoordinator from "./score-coordinator.mjs";

class AppCoordinator {
  #coordinators;
  #window;

  constructor(window) {
    console.debug("AppCoordinator.constructor()");
    this.#window = window;
    this.#coordinators = new Map();
  }

  start() {
    this.#startWelcomeCoordinator();
  }

  #startWelcomeCoordinator() {
    let welcomeCoordinator = new WelcomeCoordinator(this.#window);
    welcomeCoordinator.delegate = this;

    this.#coordinators.set("welcome", welcomeCoordinator);

    welcomeCoordinator.start();
  }

  welcomeCoordinatorDidFinish() {
    console.debug("AppCoordinator.welcomeCoordinatorDidFinish()");
    
    this.#startGameCoordinator();
  }
  
  #startGameCoordinator() {
    let gameCoordinator = new GameCoordinator(this.#window);
    gameCoordinator.delegate = this;

    this.#coordinators.set("game", gameCoordinator);

    gameCoordinator.start();
  }

  gameCoordinatorDidFinish() {
    console.debug("AppCoordinator.gameCoordinatorDidFinish()");
    
    this.#startScoreCoordinator();
  }
  
  #startScoreCoordinator() {
    let scoreCoordinator = new ScoreCoordinator(this.#window);
    scoreCoordinator.delegate = this;

    this.#coordinators.set("score", scoreCoordinator);

    scoreCoordinator.start();
  }

  scoreCoordinatorDidFinish() {
    console.debug("AppCoordinator.scoreCoordinatorDidFinish()");
    
    this.#startWelcomeCoordinator();
  }
}

export default AppCoordinator;
