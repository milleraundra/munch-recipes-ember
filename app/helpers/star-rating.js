import Ember from 'ember';

export function starRating(params) {
  var count = 0;
  var length = params[0].get('length');
  params[0].forEach(function(rating){
    count += rating.get('stars');
  });
  var average = count / length;
  average = average.toFixed(1);
  return average;
}

export default Ember.Helper.helper(starRating);
