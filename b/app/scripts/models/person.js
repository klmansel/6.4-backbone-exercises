var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  defaults: {
    'first-name': '',
    'last-name': '',
    'address': '',
    'phone-number': ''
  }
});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/karascontacts'
});

module.exports = {
  'Person' : Person,
  'PersonCollection' : PersonCollection
};
