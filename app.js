    var App = angular.module('App', []);
    App.controller('WebCtrl', function ($scope, $http) {

        $http.get('web.json')
            .then(function (res) {
                $scope.start = res.data;
            });

        $http.get('/')
            .then(function(){

                $scope.menu = function (id) {
                    $scope.articles = $scope.start.slice(id, id + 1);
                }
            });

    });