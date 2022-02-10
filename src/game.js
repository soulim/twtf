import AppCoordinator from "./coordinators/app-coordinator.mjs";
import GameCoordinator from "./coordinators/game-coordinator.mjs";

window.addEventListener("load", function () {
  let coordinator = new GameCoordinator(this);

  coordinator.delegate = new AppCoordinator(this);
  coordinator.start();
});
