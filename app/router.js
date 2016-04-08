import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path:'/category/:category_type'});
  this.route('single-item', {path:'/single-item/:item_id'});
});

export default Router;
