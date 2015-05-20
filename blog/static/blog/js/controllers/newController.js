/**
 * Created by gkadillak1 on 5/20/15.
 */
// We're referencing our declared variable 'app' here
app.controller('newController', function($http) {
    // Controller logic goes here
    console.log('Our controller is working');
    $http.get('/api/blog/entries')
        .then(function(data) {
            console.log(data);
        });
});