import WelcomeViewController from './welcome-viewcontroller.mjs';
import WelcomeViewModel from './welcome-viewmodel.mjs';
import WelcomeModel from './welcome-model.mjs';

class WelcomeCoordinator {
  #delegate
  #window;

  constructor(window) {
    console.debug('WelcomeCoordinator.constructor()');
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
  }

  welcomeViewModelDidStartGame() {
    console.debug('WelcomeCoordinator.welcomeViewModelDidStartGame()');
    this.#delegate.welcomeCoordinatorDidFinish();
  }
}

export default WelcomeCoordinator;
