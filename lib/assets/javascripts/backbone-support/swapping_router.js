Support.SwappingRouter = function(options) {
  Backbone.Router.apply(this, [options]);
};

_.extend(Support.SwappingRouter.prototype, Backbone.Router.prototype, {
  swap: function(newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = newView;
    $(this.el).empty().append(this.currentView.render().el);
  }
});

Support.SwappingRouter.extend = Backbone.Router.extend;
