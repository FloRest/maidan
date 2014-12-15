Config = {};
Config.roles = {
    admin: {
        routes: [
            {name: 'Orders', path:'/orders'},
            {name: 'Dishes', path:'/categories'}
        ]
    },
    auth: {
        routes: [
            {name: 'Dishes', path:'/categories'},
            {name: 'Cart', path:'/cart'}
        ]
    },
    notauth: {
        routes: [
            {name: 'Dishes', path:'/categories'}
        ]
    }
};