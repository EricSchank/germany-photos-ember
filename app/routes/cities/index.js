import App from '../../app';
export default App.CitiesIndexRoute = Ember.Route.extend({
  model: function(){
    // return [{name: 'hi'}];
    return this.store.find('city');
  }
});
