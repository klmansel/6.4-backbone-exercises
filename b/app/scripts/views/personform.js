var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/personform.hbs');


var PersonFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'person-form col-xs-12 col-med-6',
  template: template,
  events: {
    'submit' : 'addPerson',
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addPerson: function(event){
    event.preventDefault();
    this.collection.create({
      'first-name': $('#first-name').val(),
      'last-name': $('#last-name').val(),
      'address': $('#address').val(),
      'phone-number': $('#phone').val()
    });

  this.clear({
    'first-name': $('#first-name').val(''),
    'last-name': $('#last-name').val(''),
    'address': $('#address').val(''),
    'phone-number': $('#phone').val('')
  });//this code breaks the logging(maybe)), but does clear the inputs
  }
});




module.exports = {
  'PersonFormView' : PersonFormView
};
