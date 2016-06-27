var $ = require('jquery');
var BlogPostCollection = require('./models/blogpost').BlogPostCollection;
var BlogFormView = require('./views/blogpostform').BlogFormView;
var BlogPostView = require('./views/blogpost').BlogPostView;

var myPosts = new BlogPostCollection();
console.log(myPosts);

var myBlogForm = new BlogFormView({collection: myPosts});
$('.app').append(myBlogForm.render().el);

var viewPosts = new BlogPostView({collection: myPosts});
$('app').append(viewPosts.render().el);
