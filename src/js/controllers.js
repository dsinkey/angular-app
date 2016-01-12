'use strict';


angular.module('myApp.controllers', [])
 .controller('helloWorldCtrl',function ($scope) {
        $scope.name = { first: "Dustin", last: "Sinkey" };
 });