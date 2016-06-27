var BlogPost = require('./models/blog').BlogPost;
var BlogPostCollection = require('./models/blog').BlogPostCollection;
var view = require('./views/blog');
var $ = require('jquery');
var Backbone = require('backbone');

var myblog = new BlogPostCollection();

var posts = new view.BlogPostView({collection: myblog});

$('.app').append(posts.render().el);
