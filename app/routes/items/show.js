import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },

  actions: {
    update(model, key, val) {
      model.set(key, val);
    },

    submit(model) {
      model.save();
    }
  }
});
