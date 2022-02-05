import GameViewController from "../controllers/game-viewcontroller.mjs";
import GameViewModel from "../viewmodels/game-viewmodel.mjs";
import GameModel from "../models/game-model.mjs";

class GameCoordinator {
  #delegate
  #window;

  constructor(window) {
    console.debug("GameCoordinator.constructor()");
    
    this.#window = window;
  }

  set delegate(value) { this.#delegate = value };

  start() {
    let viewController = new GameViewController(this.#window.document);
    let viewModel = new GameViewModel();

    viewController.viewModel = viewModel;

    viewModel.model = new GameModel();
    viewModel.coordinatorDelegate = this;
    viewModel.viewDelegate = viewController;

    viewController.renderView();
  }

  gameViewModelDidFinish() {
    console.debug("GameCoordinator.gameViewModelDidFinish()");

    this.#delegate.gameCoordinatorDidFinish();
  }
}

export default GameCoordinator;
