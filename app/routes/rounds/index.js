import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  beforeModel: function () {
    var newRound = this.store.createRecord('round');
    newRound.set('created', moment());
    newRound.save();
  },
  model: function () {
    // console.info(this.store.findAll('round'));
    return this.store.findAll('round');
  },
  actions: {
    createRound: function () {
      let self = this;
      let round = this.store.createRecord('round');
      round.set('created', moment());
      round.save().then(function (round) {
        self.transitionTo('rounds.edit', round.get('id'));
      })
    }
  }
});
