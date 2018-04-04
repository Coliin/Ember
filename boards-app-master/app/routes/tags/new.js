import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tag: EmberObject.create(),
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
    });
  },
  actions:{
    save:function(oldValue,newValue){
      let tag=this.get('store').createRecord('tag',{title:newValue.tag.title,color:newValue.tag.color});
      tag.save().then(()=>{this.transitionTo("tags");}).
      catch((error)=>console.log(error));

    },
    cancel(){
      this.transitionTo("tags");
    },
  },
});
