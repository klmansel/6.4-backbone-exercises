var Backbone = require ('backbone');
var $ = require('jquery');
var template = require('../../templates/personview.hbs');


var PersonView = Backbone.View.extend({
  tagName: 'ul',
  className: 'form-results',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(person){
    var personItem = new PersonItemView({model: person});
    this.$el.append(personItem.render().el);
  }
});

var PersonItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'each-person',
  template: template,

  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  'PersonView' : PersonView,
  'PersonItemView' : PersonItemView
};
