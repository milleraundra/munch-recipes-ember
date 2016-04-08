import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.query('item', {
      orderBy: 'category',
      equalTo: param.category_type
    });
  }
});
