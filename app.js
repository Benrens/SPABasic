var App = angular.module('App', []);

App.controller('WebCtrl', function($scope, $http) {
    $http.get('web.json')
        .then(function(res){
            $scope.todos = res.data;
        });
});