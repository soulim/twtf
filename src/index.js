import AppCoordinator from "./coordinators/app-coordinator.mjs";
import WelcomeCoordinator from "./coordinators/welcome-coordinator.mjs";

window.addEventListener("load", function () {
  let coordinator = new WelcomeCoordinator(this);

  coordinator.delegate = new AppCoordinator(this);
  coordinator.start();
});
