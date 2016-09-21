angular.module('cvApp')
    .directive('ngCv', [function(){
        return {
            restrict: 'EA',
            template: 'cv.html',
            link: function(scope, elem, attrs){

            }
        }
    }]);