import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  q:        DS.attr('number'),

  category: DS.belongsTo('category')
});
