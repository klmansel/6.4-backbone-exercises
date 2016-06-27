var Backbone = require('backbone');
var $ = require('jquery');
var formTemplate = require('../../templates/bookmarkform.hbs');
var eachBookmark = require('../../templates/bookmark.hbs');

var BookmarkFormView = Backbone.View.extend({
  tagName :'form',
  className: 'bookmark-form col-md-6',
  template: formTemplate,
  events: {
    'submit' : 'addURL'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addURL: function(){
    event.preventDefault();
    this.collection.create({
      'title': $('#title').val(),
      'url': $('#url').val(),
      'tag': $('#tag').val()

    });
  }
});

var BookmarkView = Backbone.View.extend({
  tagName : 'ul',
  className : 'bookmark-list col-md-6',
  initialize: function(){
    this.listenTo(this.collection, 'add',this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(url){
    var newURL = new BookmarkItemView({model:url});
    this.$el.append(newURL.render().el);
  }
});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'li',
  className : 'each-bookmark col-md-6',
  template : eachBookmark,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }

});

module.exports = {
  'BookmarkFormView' : BookmarkFormView,
  'BookmarkView' : BookmarkView,
  'BookmarkItemView' : BookmarkItemView
};
