import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        guardar(){
          let factura = this.get('model');
          factura.save().then(()=>{
            Ember.RSVP.all( factura.get('conceptos').invoke('save') ).then(()=>{
              //alert('se guardó c:');
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
