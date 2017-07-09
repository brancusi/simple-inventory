import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories', function() {
    this.route('show', {path: ':category_id'});
  });

  this.route('items', function() {
    this.route('show', {path: ':item_id'});
  });
});

export default Router;
