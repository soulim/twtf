import AppCoordinator from './coordinators/app-coordinator.mjs';

window.addEventListener('load', function () {
  console.debug('window.addEventListener() load');
  let appCoordinator = new AppCoordinator(this);
  appCoordinator.start();
});
