'use-strict'
/*global angular*/

var app = angular.module('saplyn', []);

app.controller('homeController', function($scope, $http) {
    $scope.word = "THE_BIRD";
    
    $http.get('/api/todos').then(function() {
        $scope.word = "REAL GOOD";
    }, function() {
        $scope.word = "ERROR :(";
    });

});
