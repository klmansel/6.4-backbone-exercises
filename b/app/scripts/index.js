var $ = require('jquery');
var PersonCollection = require('./models/person').PersonCollection;
var PersonView = require('./views/person').PersonView;
var PersonFormView = require('./views/personform').PersonFormView;


var people = new PersonCollection();
console.log(people);

var personForm = new PersonFormView({collection:people});
$('.app').prepend(personForm.render().el);

var personList = new PersonView({collection: people});
$('.app').append(personList.render().el);

people.fetch();
