import App from '../app';
export default App.City = DS.Model.extend({
  name: DS.attr('string'),
  images: DS.hasMany('image')
});

App.City.FIXTURES = [
    {
     id: 1,
     name: 'Learn Ember.js'
    },
    {
     id: 2,
     name: '...'
    },
    {
     id: 3,
     name: 'Profit!'
    }
  ];
