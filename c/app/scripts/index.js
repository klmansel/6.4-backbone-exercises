var $ = require('jquery');
var Backbone = require('backbone');
var BlogPostCollection = require('./models/blogpost').BlogPostCollection;
var BlogPostView = require('./views/blogpost').BlogPostView;
var BlogPostFormView = require('./views/blogform').BlogPostFormView;
require('./router.js');

// Commented out because it is in the router
// var myBlog = new BlogPostCollection();
// console.log(myBlog);
//
// var blogForm = new BlogPostFormView({collection : myBlog});
// $('.app').prepend(blogForm.render().el);
//
// var viewBlog = new BlogPostView({collection : myBlog});
// $('.app').append(viewBlog.render().el);
//
// myBlog.fetch();

Backbone.history.start();
