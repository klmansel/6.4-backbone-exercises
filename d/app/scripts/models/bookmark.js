var Backbone = require('backbone');

var Bookmark = Backbone.Model.extend({
    defaults: {
      'url': '',
      'title': '',
      'tag': ''
    }
});

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/karasstuff'
});


module.exports = {
  'Bookmark' : Bookmark,
  'BookmarkCollection' : BookmarkCollection
};
