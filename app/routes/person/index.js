import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        console.info(this.store.findAll('person'));
        return this.store.findAll('person');
    }
});
