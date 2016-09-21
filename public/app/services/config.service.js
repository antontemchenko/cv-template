'use strict';
angular.module('cvApp')
    .service('CONFIG',[function($http){
        var CONFIG = {};
        $http.get('/config.json').success(function(data){
            CONFIG = data;
        })
    }]);