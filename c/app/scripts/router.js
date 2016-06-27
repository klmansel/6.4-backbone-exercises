var Backbone = require('backbone');
var $ = require('jquery');
var BlogPostCollection = require('./models/blogpost').BlogPostCollection;
var BlogPostView = require('./views/blogpost').BlogPostView;
var BlogDetailView = require('./views/blogpostdetail').BlogDetailView;
var BlogPostFormView = require('./views/blogform').BlogPostFormView;


var BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index', //function named index
    'title/:id/': 'post' //function named post that takes an argument of title/ID
    //Backbone will call the functions based on the address in the URL
  },
  initialize: function(){
    this.collection = new BlogPostCollection();
  },
  index: function(){

    var blogForm = new BlogPostFormView({collection : this.collection});
    $('.app').prepend(blogForm.render().el);

    var viewBlog = new BlogPostView({collection : this.collection});
    $('.app').append(viewBlog.render().el);

    this.collection.fetch();
  },
  post: function(blogId){
    var post = this.collection.get(blogId);
    var postIclicked = new BlogDetailView({model : post});
    $('.blog-form').html(postIclicked.render().el);
  }

});

var router = new BlogRouter();

module.exports = router;
