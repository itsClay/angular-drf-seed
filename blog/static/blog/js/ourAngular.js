/**
 * Created by gkadillak1 on 5/20/15.
 */

var app = angular.module('angularApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/blog/js/views/hello_world.html',
            controller: 'newController'
        })
}]);


