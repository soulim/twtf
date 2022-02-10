import WelcomeViewController from "../controllers/welcome-viewcontroller.mjs";
import WelcomeViewModel from "../viewmodels/welcome-viewmodel.mjs";
import WelcomeModel from "../models/welcome-model.mjs";

class WelcomeCoordinator {
  #delegate;
  #window;

  static NAME = "WelcomeCoordinator";

  constructor(window) {
    this.#window = window;
  }

  set delegate(value) { this.#delegate = value };

  start() {
    let viewController = new WelcomeViewController(this.#window.document);
    let viewModel = new WelcomeViewModel();

    viewController.viewModel = viewModel;

    viewModel.model = new WelcomeModel();
    viewModel.coordinatorDelegate = this;
    viewModel.viewDelegate = viewController;

    viewController.renderView();
  }

  viewModelDidFinish() {
    this.#delegate.coordinatorDidFinish(this);
  }
}

export default WelcomeCoordinator;
