import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'germany-photos-ember', // TODO: loaded via config
  Resolver: Resolver,
  ApplicationAdapter: DS.FixtureAdapter.extend()
});
window.App = App;

loadInitializers(App, 'germany-photos-ember');
// App.ApplicationAdapter = ;

export default App;
