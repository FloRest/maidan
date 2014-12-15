Accounts.onCreateUser(function(options, user) {
    user.roles = ['auth'];
    return user;
});