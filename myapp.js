Recipes = new Mongo.Collection("recipes");

if (Meteor.isClient) {
  Session.set('recipe', {});

  Template.body.helpers({
    recipes: function () {
      return Recipes.find({}, {sort: {createdAt: -1}});
    },
    recip: function () {
      return Session.get('recipe');
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted

      var text = event.target.text.value;
      var pseudo = event.target.pseudo.value;

      if (Object.keys(Session.get('recipe')).length != 0 && text != '') {
        var recipe = Recipes.findOne(Session.get('recipe')._id);
        if (pseudo == recipe.pseudo)
          Recipes.update({_id : recipe._id}, {$set:{text : text, pseudo:pseudo}});
      } else if (text != ''){
        Recipes.insert({
          pseudo: pseudo,
          text: text,
          createdAt: new Date() // current time
        });
      }

      // Clear form
      Session.set('recipe', {});
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });

  Template.recipe.events({
    'click .recipe .delete' : function (event, template) {
      Recipes.remove(this._id);
    }
  });

  Template.recipe.events({
    'click .recipe .text' : function (event, template) {
      console.log(this);
      Session.set('recipe', this);
    }
  });

  Template.body.greeting = function () {
    return "Welcome to myapp.";
  };

  Template.body.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button lol");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
