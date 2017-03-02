'use strict'
/*global angular*/

var app = angular.module('saplyn', []);

app.controller('homeController', function($scope, $http) {
    $scope.word = "THE_BIRD";
    
    $http.get('/api/todos').then(function(response) {
        $scope.word = response.data;
    }, function() {
        $scope.word = "ERROR :(";
    });

});
