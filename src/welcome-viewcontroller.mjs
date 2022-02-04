class WelcomeViewController {
  #viewModel;

  constructor(document) {
    console.debug('WelcomeViewController.constructor()');
    let app = document.querySelector('#app');
    console.assert(app !== null, 'App container (#app) is not found');

    let template = document.querySelector('#welcome-card-template');
    console.assert(template !== null, 'Template (#welcome-card-template) is not found');

    let view = template.content.cloneNode(true);

    let button = view.querySelector("#welcome-card-start-button");
    button.addEventListener("click", this.#didClickStartButton.bind(this));

    app.replaceChildren(view);
  }

  set viewModel(value) { this.#viewModel = value }

  #didClickStartButton(event) {
    console.debug('WelcomeViewController.#didClickStartButton()');
    console.debug(event);

    this.#viewModel.startGame();
  }
}

export default WelcomeViewController;
