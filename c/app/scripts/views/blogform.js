var Backbone = require('backbone');
var template = require('../../templates/blogform.hbs');
var $ = require('jquery');


var BlogPostFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'blog-form col-med-4',
  template: template,
  events: {
    'submit' : 'addPost',
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addPost: function(event){
    event.preventDefault();
    this.collection.create({
      'title': $('#title').val(),
      'post': $('#post').val()
    });

    this.clear({
      title:$('#title').val(''),
      post:$('#post').val('')
    });//error in log this.clear is not a function, but still works
  }


});

module.exports = {
  'BlogPostFormView' : BlogPostFormView
};
