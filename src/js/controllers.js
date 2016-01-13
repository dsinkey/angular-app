'use strict';


angular.module('myApp.controllers', [])
 .controller('helloWorldCtrl',function ($scope) {
        $scope.person = {
        	first: "Dustin",
        	last: "Sinkey"
        };

        $scope.mask = "(999) 999-9999 ext 99";
        $scope.getModel = function(){
        	return JSON.stringify($scope.person, undefined, 2);
        };
 });