import DS from 'ember-data';

export default DS.Model.extend({
  code:DS.attr('string'),
  description:DS.attr('string'),
  developer: DS.belongsTo('developer'),
  project: DS.belongsTo('project',{inverse:'stories'}),
  tag: DS.hasMany('tag'),
  step: DS.hasMany('step'),
  task: DS.hasMany('task')
});
