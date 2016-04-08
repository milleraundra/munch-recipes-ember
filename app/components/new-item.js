import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createItem() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        category: this.get('category') ? this.get('category') : "",
        description: this.get('description') ? this.get('description') : "",
        price: this.get('price') ? this.get('price') : ""
      };
      this.sendAction('createItem', params);
      this.set('name', "");
      this.set('category', "");
      this.set('description', "");
      this.set('price', "");
    }
  }
});
