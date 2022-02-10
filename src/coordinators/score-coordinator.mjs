import ScoreViewController from "../controllers/score-viewcontroller.mjs";
import ScoreViewModel from "../viewmodels/score-viewmodel.mjs";
import ScoreModel from "../models/score-model.mjs";

class ScoreCoordinator {
  #delegate;
  #window;

  static NAME = "ScoreCoordinator";

  constructor(window) {
    this.#window = window;
  }

  set delegate(value) { this.#delegate = value };

  start() {
    let viewController = new ScoreViewController(this.#window.document);
    let viewModel = new ScoreViewModel();

    viewController.viewModel = viewModel;

    viewModel.model = new ScoreModel();
    viewModel.coordinatorDelegate = this;
    viewModel.viewDelegate = viewController;

    viewController.renderView();
  }

  viewModelDidFinish() {
    this.#delegate.coordinatorDidFinish(this);
  }
}

export default ScoreCoordinator;
