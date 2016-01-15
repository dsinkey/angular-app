'use strict';

describe('controller specs', function() {
  var $scope;

  beforeEach(module('myApp.controllers'));
 
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('CalCtrl', {$scope: $scope});
  }));
 
  it("should contain 'Fun with AngularJS' event", function() {
    expect($scope.events[1].title).toBe('Fun with AngularJS');
  });

  it("should contain new event after execution of dayClick function", function() {
  	$scope.dayClick();
    expect($scope.events[1].title).toBe('Fun with AngularJS');
  });

  it("should remove an event", function() {
  	$scope.remove(2);
    expect($scope.events.length).toBe(2);
  });

});