import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sections/items/items-show', 'Integration | Component | sections/items/items show', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sections/items/items-show}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sections/items/items-show}}
      template block text
    {{/sections/items/items-show}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
