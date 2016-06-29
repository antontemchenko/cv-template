'use strict';
angular.module('cvApp', [])
    .controller('cvCtrl',[function(){
        var cv = this;
        cv.options = {
            firstName: "Anton",
            secondName: "Temchenko",
            position: "Front End Developer",
            birthDate: "23-07-1992",
            education: [],
            experience: [],
            summary: "",
            skills: [{name: 'JavaScript', power: 9, group: "Developer skills"}],
            languages: [{name: "English", level: 8}],
            interests: ["basketball"],
            personalData: [{name:"Marital status", data: "Married"}],
            volunteering: []
        };
    }])
    .directive('ngCv', [function(){
        return {
            restrict: 'AC',
            template: 'cv.html',
            link: function(scope, elem, attrs){

            }
        }

    }]);