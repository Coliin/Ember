import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return new RSVP.hash({
      task: this.get('store').findRecord('task',params.task_id)
    });
  },
  afterModel(model){
    Ember.set(model,'data',EmberObject.create(JSON.parse(JSON.stringify(model.task))));
  },
  actions:{
    save(task,data){
     Ember.set(task,'content',data.content);
     task.save().then(()=>{
       this.transitionTo("tasks");
     })
    },
    cancel(){
      this.transitionTo("tasks");
    }
  }
});
