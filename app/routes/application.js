import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    // Works, just saving API calls
    // var _this = this;
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(getWeather);
    // }

    // function getWeather(position) {
    //   Ember.$.ajax({
    //     url: 'https://api.forecast.io/forecast/9607d01f8ec538055c65070f58f6f4d2/' + position.coords.latitude + ',' + position.coords.longitude,
    //     dataType: "jsonp",
    //     success: function (data) {
    //       console.info(data, 'weather')
    //       _this.store.createRecord('weather', data);
    //     }
    //   });
    // };

    this.get('session').open('firebase', {
      provider: 'password',
      email: 'test@example.com',
      password: 'password1234'
    });
    return this.get("session").fetch().catch(function () {});
  },
  afterModel: function () {},
  actions: {
    signIn: function (provider) {
      this.get("session").open("firebase", {
        provider: provider
      }).then(function (data) {
        console.log(data.currentUser);
      });
    },
    signOut: function () {
      this.get("session").close();
    }
  }
});
