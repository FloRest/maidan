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

//templates events
Template.ApplicationLayout.events({

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
  }
});

Template.categorie.events({
  'click .categorie' : function (event, template) {
    Router.go('/categorie/'+this._id);
  }
});


//routes
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('categories', {
    //data: function () { return Items.findOne({_id: this.params._id}) }
  });
});

Router.route('/cart', function () {
  this.render('cart', {
    //data: function () { return Items.findOne({_id: this.params._id}) }
  });
});

Router.route('/categorie/:_id', function () {
  this.render('dishes', {
    data : function() {
      return {
        dishes : Dishes.find({categorieId: this.params._id})
      };
    }
  });
});

