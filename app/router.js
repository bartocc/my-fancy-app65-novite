import EmberRouter from '@embroider/router';
import config from 'my-fancy-app65-novite/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('slow-model');
});
