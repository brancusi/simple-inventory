import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    async randomCreate() {
      const name = this.get('tempName');
      const category = await this.get('model');
      const item = this.get('store').createRecord('item', {category, name, q:0});

      await item.save();
      await category.save();

      this.set('tempName', '');
    }
  }
});
