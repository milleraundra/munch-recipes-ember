import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createItem(params) {
      console.log("fired!");
      console.log(params);
    }
  }
});
