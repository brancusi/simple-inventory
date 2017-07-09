import Ember from 'ember';
import config from 'simple-inventory/config/environment';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    update(model, key, val) {
      model.set(key, val);
    },

    async submit(model) {
      const items = await model.get('items');
      const markedForSave = items
        .filter(item => item.get('hasDirtyAttributes'));

      markedForSave.forEach(item => item.save());

      const text = markedForSave
        .map(item => `${item.get('name')}: ${item.get('q')}`)
        .join('\n');

      const payload = {
        url:config.slackChannel,
        data: JSON.stringify({text}),
        type: 'POST'
      };

      Ember.$.ajax(payload)
    },

    deleteItem(itemId) {
      this.store.findRecord('item', itemId).then((item) => {
        item.destroyRecord();
      })
    }
  }
});
