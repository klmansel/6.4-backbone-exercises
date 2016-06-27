var Backbone = require('backbone');

var BlogPost = Backbone.Model.extend({
  defaults: {
    title: '',
    post: ''
  }
});

var BlogPostCollection = Backbone.Collection.extend({
  model: BlogPost,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/karasblog'
});

module.exports = {
  'BlogPost' : BlogPost,
  'BlogPostCollection' : BlogPostCollection
};
