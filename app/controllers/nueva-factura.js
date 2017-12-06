import Controller from '@ember/controller';
import sweetAlert from 'ember-sweetalert';

export default Controller.extend({
    actions: {
        guardar(){
          let factura = this.get('model');
          factura.save().then(()=>{
            Ember.RSVP.all( factura.get('conceptos').invoke('save') ).then(()=>{
            })        
          })
        },
        nuevoConcepto(){
          let concepto = this.store.createRecord('concepto', {
            factura: this.get('model')
          });
        }
      }
});
