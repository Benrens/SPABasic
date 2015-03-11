/*jslint node: true, nomen: true*/
angular.module('AjaxService', [])

.factory('ajaxService', ['$http', function($http) {
    'use strict';

    var factory = {};

    // Get function
    factory.get = function(url, callback) {
        $http.get(url)
        // On success
        .success(function(data) {
            callback(data);
        })
        // On error
        .error(function(data, status, error) {
            console.log("OH NOEZZ SOMETHING WENT TERRIBLY WRONG: ", data, status, error);
        });
    };

    // Post function
    factory.post = function(url, data, callback) {
        $http.post(url, data)
        // On success
        .success(function(data, status) {
            callback(data, status);
        })
        // On Error
        .error(function(data, status, error) {
            console.log("OH NOEZZ SOMETHING WENT TERRIBLY WRONG: ", data, status, error);
        });
    };
    
    factory.put = function(url, data, callback) {
        $http.put(url, data)
        // On success
        .success(function(data, status) {
            callback(data, status);
        })        
        // On Error
        .error(function(data, status, error) {
            console.log("OH NOEZZ SOMETHING WENT TERRIBLY WRONG: ", data, status, error);
        });
    };
    
    factory.delete = function(url, callback) {
        $http.delete(url)
        // On success
        .success(function(data, status) {
            callback(data, status);
        })
        // On Error
        .error(function(data, status, error) {
            console.log("OH NOEZZ SOMETHING WENT TERRIBLY WRONG: ", data, status, error);
        });
    };
    
    // Return factory
    return factory;
}]);
