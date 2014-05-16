var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  // this.resource('cities');
  this.resource('cities', function(){
    // this.resource('city', { path: '/:name'});
  });
  this.resource('blah');
});

export default Router;
