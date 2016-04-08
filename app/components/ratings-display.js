import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['stars:desc'],
  sortedRatings: Ember.computed.sort('ratings', 'sortBy')
});
