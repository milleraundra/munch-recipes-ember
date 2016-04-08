import Ember from 'ember';

export function starRating(params) {
  params[0].forEach(function(rating){
    console.log(rating.stars);
  })
  return "Hey, howdy hey!";
}

export default Ember.Helper.helper(starRating);
