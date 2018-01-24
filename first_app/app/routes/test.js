import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      name: "Smith",
      competences:["Rich client","MVC frameworks","Java"]
    };
  }
});
