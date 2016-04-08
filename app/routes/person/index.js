import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        console.info(this.store.findAll('user'));
        return this.store.findAll('person');
    }
});
