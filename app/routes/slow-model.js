import Route from '@ember/routing/route';

export default class SlowModelRoute extends Route {
  async model() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
}
