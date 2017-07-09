import Ember from 'ember';
import {computed} from 'ember-decorators/object';

export default Ember.Component.extend({
  @computed('query', 'model.@each.{name}', 'key')
  filteredItems(query, model, key) {
    return model.filter(item => new RegExp(query, 'i').test(item.get(key)));
  },
  //
  // filteredItems: Ember.computed('query', 'model.@each.{name}', function(){
  //   return this.get('model').filter(item => new RegExp(this.get('query'), 'i').test(item.get('name')));
  // }),
});
