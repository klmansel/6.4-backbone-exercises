var $ = require('jquery');
var BookmarkCollection = require('./models/bookmark').BookmarkCollection;
var view = require('./views/bookmark.js');

var savedBookmarks = new BookmarkCollection();
console.log(savedBookmarks);

var bookmarkForm = new view.BookmarkFormView({collection: savedBookmarks});
$('.app').prepend(bookmarkForm.render().el);

var viewBookmarks = new view.BookmarkView({collection: savedBookmarks});
$('.app').append(viewBookmarks.render().el);

savedBookmarks.fetch();
