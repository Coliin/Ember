import Ember from 'ember'
import RSVP from 'rsvp';
import  {pluralize} from 'ember-inflector';

const { Route, getOwner } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      models: getOwner(this).lookup('data-adapter:main').getModelTypes().map(type => {
        return {name: type.name,objects:this.get('store').findAll(type.name), routeName: pluralize(type.name), newName: pluralize(type.name)+".new"};
      }),
      icons: ['user','table','step forward','address card','tag','tasks']
    });
  }
});
