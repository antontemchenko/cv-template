angular.module('cvApp')
    .directive('ngCv', ['info', 'config', function(info, config){
        var template = config.template;
        return {
            restrict: 'EA',
            templateUrl: 'app/templates/'+template+'.html',
            link: function(scope, elem, attrs){
                info.success(function(data){
                    scope.info = data;
                })
            }
        }
    }]);