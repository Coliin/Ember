import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    save:function(oldValue,newValue){
      let task=this.get('store').createRecord('task',JSON.parse(JSON.stringify(newValue)));
      task.save().then(()=>{this.transitionTo("tasks");}).
      catch((error)=>console.log(error));
    },
    cancel(){
      this.transitionTo("tasks");
    }
  }
});
