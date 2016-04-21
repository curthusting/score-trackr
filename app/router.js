import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('people', function () {
    this.route('edit', {
      path: '/edit/:id'
    })
  });
  this.route('rounds', function () {
    this.route('edit', {
      path: '/edit/:id'
    })
  });
  this.route('courses', function () {
    this.route('edit', {
      path: '/edit/:id'
    });
    this.route('holes');
  });
});

export default Router;
