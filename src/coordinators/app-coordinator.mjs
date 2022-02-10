class AppCoordinator {
  #window;

  constructor(window) {
    this.#window = window;
  }

  start() {}

  coordinatorDidFinish(source) {
    let coordinator = source.constructor.NAME;

    switch (coordinator) {
      case "WelcomeCoordinator":
        window.location.href = "/game.html";
        break;
      case "GameCoordinator":
        window.location.href = "/score.html";
        break;
      case "ScoreCoordinator":
        window.location.href = "/";
        break;
      default:
        console.error("Cannot handle coordinatorDidFinish() from " + coordinator);
    }
  }
}

export default AppCoordinator;
