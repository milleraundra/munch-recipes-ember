import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  rating: DS.hasMany('rating', {async: true})
});
