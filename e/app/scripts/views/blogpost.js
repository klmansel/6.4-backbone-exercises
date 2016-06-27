var Backbone = require('backbone');
var $ = ('jquery');
var template = require('../../templates/blogpost.hbs');

var BlogView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list col-md-6',
  initialize: function(){
    this.listenTo(this.collection, 'add',this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(post){
    var newPost = new BlogPostView({model:post});
    this.$el.append(newPost.render().el);
  }
});

var BlogPostView = Backbone.View.extend({
  tagName: 'li',
  className: 'each-post col-md-6',
  template: template,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

module.exports = {
  'BlogView' : BlogView,
  'BlogPostView' : BlogPostView
};
