import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      createItem() {
        var params = {
          name: this.get('name') ? this.get('name') : "",
          category: this.get('category') ? this.get('category') : "",
          description: this.get('description') ? this.get('description') : "",
          image: this.get('image') ? this.get('image') : "http://naxcore.com/wp-content/themes/Artificial-Reason-WP/img/no_image.png",
          price: this.get('price') ? this.get('price') : ""
        };
        this.sendAction('createItem', params);
        this.set('name', "");
        this.set('description', "");
        this.set('image', "");
        this.set('price', "");
      }
    }
  });
