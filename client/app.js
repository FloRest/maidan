Session.set('dishes', []);

//templates helpers
Template.categories.helpers({
  categories: function () {
    return Categories.find({}, {sort: {createdAt: 1}});
  }
});

Template.cart.helpers({
  dishes: function () {
    return Session.get('dishes');
  },
  total: function () {
    var dishes = Session.get('dishes');
    var total = 0;
    for(var i =0; i < dishes.length; i++){
      total += dishes[i].price;
    }
    return total;
  }
});

Template.ApplicationLayout.helpers({
  menuItems: function () {
    var user = Meteor.user();

    if (user) {
      var allroutes = [];
      for (var i = 0; i < user.roles.length; i++) {
        var routes = Config.roles[user.roles[i]].routes;
        allroutes = allroutes.concat(routes);
      }
      return allroutes;
    } else {
      return Config.roles.notauth.routes;
    }
  }
});

//templates events
Template.ApplicationLayout.events({
    'click paper-item.menu-item': function(event, template) {
      Router.go(this.path);
      template.firstNode.closeDrawer();
    }
});

Template.cart.events({
  'click .dish .less': function (event, template) {
    var dishId = this._id;
    var dishes = Session.get('dishes');
    var pos = -1;
    for(var i = 0; i < dishes.length; i++) {
      if (dishes[i]._id == dishId) {
        pos = i;
        break;
      }
    }
    if (pos != -1) {
      var copiedDishes = dishes.slice(0);
      copiedDishes.splice(pos, 1);
      Session.set('dishes', copiedDishes);
    }
  }
});

Template.dish.events({
  'click .dish .add': function (event, template) {
    var dishes = Session.get('dishes');
    var copiedDishes = dishes.slice(0); //force new array to update session
    copiedDishes.push(this);
    Session.set('dishes', copiedDishes);
  },
  'click .dish .preview': function (event, template) {
    Router.go('/dish/'+this._id);
  }
});

Template.categorie.events({
  'click .categorie' : function (event, template) {
    Router.go('/categorie/'+this._id);
  }
});

