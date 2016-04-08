import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord('item', param.item_id);
  },
  actions: {
    addRating(params) {
      var newRating = this.store.createRecord('rating', params);
      newRating.save();
      this.transitionTo('single-item');
    }
  }
});
