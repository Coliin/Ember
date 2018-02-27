import Route from '@ember/routing/route';
import Object from '@ember/object';
import {computed} from '@ember/object';

const Data=Object.extend({
  contacts: Ember.computed('filter','datas.@each.isDeleted',function(){
    let notDeleted = this.get('datas').filterBy('isDeleted',false);
    let filter=this.get('filter');
    if(filter){
      return notDeleted.filter(
        (item)=>{return item.get('nom').includes(filter) || item.get('prenom').includes(filter) || item.get('email').includes(filter);}
      );
    }
    return notDeleted
  })
});

export default Route.extend({
  model(){
    let storedContacts=this.get('store').findAll('contact');
    return Data.create({datas: storedContacts});
  },
  actions:{
    addNew:function(){
      let store=this.get('store');
      debugger
      let c = Object.create({
        nom: 'PACO'
      })
      let contact = store.createRecord(c);
      contact.save();
    },
    delete:function(contact){
      contact.deleteRecord();
    }
  },
  cancelDeletion:function(deleteds){
    deleteds.forEach(
      (item)=>{item.rollbackAttributes();}
    );
  }
});
