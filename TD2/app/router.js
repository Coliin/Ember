import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('step');
  this.route('contact');
  this.route('test-add-contact');
  this.route('contacts');
});

export default Router;
