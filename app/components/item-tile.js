import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    ratings: this.store.findAll('record', this.get('item').id);
  }
});
