import DS from 'ember-data';

export default DS.Model.extend({
    descripcion: DS.attr('string'),
    cantidad: DS.attr('number'),
    precio: DS.attr('number'),
    descuento: DS.attr('number'),

    factura: DS.belongsTo('factura'),

    importe: Ember.computed('precio', 'cantidad', function() {
        if(!isNaN(this.get('precio')) && !isNaN(this.get('cantidad')))  {
          return this.get('cantidad') * this.get('precio');
        }
    }),
    total: Ember.computed('importe', 'descuento', function() {
        if(!isNaN(this.get('importe')) && !isNaN(this.get('descuento')))    {
          return this.get('importe') - this.get('descuento');
        }
    }),
});
