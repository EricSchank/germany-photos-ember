import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'germany-photos-ember', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'germany-photos-ember');

export default App;
