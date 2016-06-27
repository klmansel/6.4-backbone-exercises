var Backbone = require('backbone');
var template = require('../../templates/blogpostform.hbs');
// var $ = require('jquery');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'blog-form col-md-6',
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
      body:$('#body').val()
    });

    this.clear({
      title:$('#title').val(''),
      body:$('#body').val('')
    });
  }
});

module.exports = {
  'BlogFormView' : BlogFormView
};
