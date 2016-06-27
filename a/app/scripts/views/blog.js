var Backbone = require('backbone');
var template = require('../../templates/blogpost.hbs');
var $ = require('jquery');


var BlogPostView = Backbone.View.extend({
  tagName: 'form',
  className: 'blog-form col-xs-12 col-md-offset-4 col-md-4',
  template: template,
  events: {
    'submit' : 'addBlogPost'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  addBlogPost: function(event){
    event.preventDefault();
    this.collection.create({
      title:$('#title').val(),
      post:$('#post').val()
    });

    this.clear({
      title:$('#title').val(''),
      post:$('#post').val('')
    });//this code breaks the logging, but does clear the inputs
  }
});


module.exports = {
  'BlogPostView' : BlogPostView
};
