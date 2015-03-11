angular.module('App', ['AjaxService'])

.controller('WebCtrl', ['$scope', 'ajaxService', function ($scope, ajaxService) {
    'use strict';

	ajaxService.get('web.json', function(data){
	   $scope.start = data;
	});

    ajaxService.get('articles.json', function(data){
       $scope.lijst = data;
    });

    $scope.menu = function (id) {
        $scope.articles = $scope.start.slice(id, id + 1);
    };
}]);