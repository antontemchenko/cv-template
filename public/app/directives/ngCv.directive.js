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
                    });
                    scope.nestedSkills = (function(list, cols){
                        var newList = [];
                        for(var i = 0; i<= list.length; i+=cols){
                            newList.push(list.slice(i, i+cols));
                        }
                        console.log(newList);
                        return newList;
                    })(data.skills, 4);
                })
            }
        }
    }]);