var Backbone = require('backbone');
var template = require('../../templates/blogdetail.hbs');
var $ = require('jquery');


var BlogDetailView = Backbone.View.extend({
  tagName: 'p',
  className: 'blog-detail',
  template: template,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
  // events: {
  //   'click .home-button' : 'goHome',
  // }
});



module.exports = {
  'BlogDetailView' : BlogDetailView
};
