Meteor.startup(function () {
    //first launch
    if (Categories.find().count() == 0) {
        //add categories
        var categories = ['Starters', 'Dishes', 'Desserts', 'Drinks'];
        for(var i = 0; i < categories.length; i++) {
            Categories.insert({name: categories[i]});
        }

        //categories ids
        var starterId = Categories.findOne({name: categories[0]})._id;
        var dishId = Categories.findOne({name: categories[1]})._id;
        var dessertId = Categories.findOne({name: categories[2]})._id;
        var drinkid = Categories.findOne({name: categories[3]})._id;

        //add dishes

        //add starters
        Dishes.insert({
            name: "Chibre à l'ognon",
            description: "La spécialité du chef !",
            price: 24,
            categorieId: starterId
        });
        Dishes.insert({
            name: "Roulé de péni",
            price: 68,
            categorieId: starterId
        });
        Dishes.insert({
            name: "Nem au caca",
            price: 91,
            categorieId: starterId
        });

        //add dishes
        Dishes.insert({
            name: "Boudin de caca",
            price: 76,
            categorieId: dishId
        });
        Dishes.insert({
            name: "Coeur de salope",
            price: 15,
            categorieId: dishId
        });
        Dishes.insert({
            name: "Délice de chibrosaure",
            price: 38,
            categorieId: dishId
        });

        //add desserts
        Dishes.insert({
            name: "Sexe glacé (male ou femelle)",
            price: 75,
            categorieId: dessertId
        });
        Dishes.insert({
            name: "Sucette du chef",
            price: 13,
            categorieId: dessertId
        });
        Dishes.insert({
            name: "Banana foutre",
            price: 98,
            categorieId: dessertId
        });

        //add drinks
        Dishes.insert({
            name: "Foutre frais",
            price: 42,
            categorieId: drinkid
        });
        Dishes.insert({
            name: "Cyprine",
            price: 58,
            categorieId: drinkid
        });

    }
});