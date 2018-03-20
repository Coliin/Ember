import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      steps:this.get('store').findAll('tag'),
      fields:['title', 'color'],
      operations:[{icon:'red remove',link:'steps.delete'},{icon:'edit',link:'steps.update'}]
    });
  }
});
