'use strict';
angular.module('cvApp')
    .service('info',['$http', 'config', function($http, config){
        return $http.get('app/info-'+config.lang+'.json');
    }]);