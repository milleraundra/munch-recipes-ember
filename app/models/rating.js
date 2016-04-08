import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr(),
  explanation: DS.attr(),
  date: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
