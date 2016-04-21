import DS from 'ember-data';

export default DS.Model.extend({
  currently: DS.attr(),
  daily: DS.attr(),
  flags: DS.attr(),
  hourly: DS.attr(),
  minutely: DS.attr()
});
