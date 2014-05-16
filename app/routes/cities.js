import App from '../app';
export default App.CitiesRoute = Ember.Route.extend({
  model: function(){
    // var c = this.store.find('city');
    // if(!c){
      // this.store.push('city', {
      //   id: 1,
      //   name: 'Hannover'
      // });
      // this.store.push('city', {
      //   id: 2,
      //   name: 'Augsburg'
      // });
      // this.store.push('city', {
      //   id: 3,
      //   name: 'Neuschwanstein'
      // });

      // this.store.push('image', {
      //   id: 1,
      //   title: 'Lake behind the "New" City Hall',
      //   description: '',
      //   src: 'https://lh5.googleusercontent.com/UP6M59yqb9uYe7f3pLShMJwdGtShdaNFYSBw8w5fbMA=w594-h442-p-no',
      //   city: this.store.find('city', {name: 'Hannover'})
      // });
      // this.store.push('image', {
      //   id: 2,
      //   title: '',
      //   description: '',
      //   src: 'https://lh4.googleusercontent.com/-oms7ydp7kwo/UxzYtp4XlAI/AAAAAAAAAzA/QvVVHLv5wLU/w1734-h1296-no/IMG_2194.JPG',
      //   city: this.store.find('city', {name: 'Hannover'})
      // });
      // var c = 
    // }
    return this.store.all('City');
  }
});
