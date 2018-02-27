import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  descriptif:DS.attr('string'),
  startDate:Ds.attr('date'),
  duetDate:Ds.attr('date'),
});
