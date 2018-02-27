import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let contacts = this.get('store').findAll('contact');
  },
  actions:{
    addNew:function(){
      let store=this.get('store');
      let contact = store.createRecord({
        nom: 'PACO',
        prenom: 'Paco',
        email: 'paco@gmail.com'
      });
      contact.save();
    }
  }
});
