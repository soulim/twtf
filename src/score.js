import AppCoordinator from "./coordinators/app-coordinator.mjs";
import ScoreCoordinator from "./coordinators/score-coordinator.mjs";

window.addEventListener("load", function () {
  let coordinator = new ScoreCoordinator(this);

  coordinator.delegate = new AppCoordinator(this);
  coordinator.start();
});
