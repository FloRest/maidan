Schemas = {};
Schemas.Dish = {};
Schemas.Categorie = {};

Schemas.Dish = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Descrption",
        optional: true
    },
    price: {
        type: Number,
        label: "Price",
        min: 0
    },
    categorieId: {
        type: String
    },
    photosIds: {
        type: [Object],
        optional : true
    }
});
Dishes.attachSchema(Schemas.Dish);

Schemas.Categorie = new SimpleSchema({
   name: {
       type: String,
       label: "Name"
   }
});
Categories.attachSchema(Schemas.Categorie);