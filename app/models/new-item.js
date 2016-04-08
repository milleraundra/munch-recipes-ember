import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  ratings: DS.hasMany('rating', {async: true})
});
