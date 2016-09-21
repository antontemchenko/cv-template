'use strict';
angular.module('cvApp')
    .service('infoService',[function(CONFIG){
        var info = CONFIG;
        return info;
    }]);