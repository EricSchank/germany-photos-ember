import App from '../app';
export default App.Image = DS.Model.extend({
  src: DS.attr('string'),
  city: DS.belongsTo('city'),
  title: DS.attr('string'),
  description: DS.attr('string')
});