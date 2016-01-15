'use strict';
angular.module('myApp.controllers', []).controller('CalCtrl', function ($scope) {
    $scope.events = [
        {
            title: 'All Day Event',
            start: moment().add('day', 3).format('L')
        },

        {
            title: "Fun with AngularJS",
            start: moment().startOff('hour').format(),
            end: moment().endOf('hour').add('hour', 1).format(), addDay: false
        }
    ];

    $scope.eventSources = [$scope.events];

    $scope.dayClick = function(date){
        $scope.$apply(function(){
            $scope.events.push(
            {
                title: "new event",
                start: date,
                end: moment(date).add('hours', 1).format(),
                allday: false
            });
        });
    };

    $scope.remove = function(index){
        $scope.event.splice(index, 1);
    };

    $scope.uiConfig = {
        calendar: {
            height: 400,
            editable: ture,
            header: {
                left: 'month agendaWeek agendaDay',
                center: 'title',
                right: 'today prev, next'
            },
            defaultView: 'agendaWeek',
            dayClick: $scope.dayClick,
            eventDrop: $scope.$apply,
            eventResize: $scope.$apply
        }
    };
});