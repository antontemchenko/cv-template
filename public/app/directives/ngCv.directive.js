angular.module('cvApp')
    .directive('ngCv', ['info', 'config', '$timeout', function(info, config, $timeout){
        var template = config.template;
        return {
            restrict: 'EA',
            templateUrl: 'app/templates/'+template+'.html',
            link: function(scope, elem, attrs){
                info.success(function(data){
                    var compiled = false;
                    scope.info = data;
                    scope.getSkillClass = function(skill){
                        var w = "w-"+skill.level;
                        return compiled ? w + " compiled": w;
                    };
                    $timeout(function(){
                        compiled = true;
                    })
                })
            }
        }
    }]);