//routes
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render('categories', {});
});

Router.route('/categories', function () {
    this.render('categories', {});
});

Router.route('/cart', function () {
    this.render('cart', {});
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

Router.route('/dish/:_id', function () {
    this.render('dish', {
        data: Dishes.findOne(this.params._id)
    });
});