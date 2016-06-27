var Backbone = require('backbone');
var template = require('../../templates/blogpost.hbs');
var $ = require('jquery');

var BlogPostView = Backbone.View.extend({
  tagName: 'ul',
  className: 'view-posts col-md-6',//bootstrap not working
  initialize: function(){
    this.listenTo(this.collection, 'add',this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(post){
    var newPost = new BlogPostItemView({model:post});
    this.$el.append(newPost.render().el);
  }
});

var BlogPostItemView = Backbone.View.extend({
  tagName: 'li',
  template: template,

  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  'BlogPostView' : BlogPostView,
  'BlogPostItemView' : BlogPostItemView
};
