import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.get('shoppingCart').get('items');
  },
  actions: {
    checkout() {
      this.get('shoppingCart').checkout();
      this.transitionTo('index');
    }
  }
});
