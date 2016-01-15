'use strict';

function onGoogleReady() {
 console.log("Google maps api initialized.");
   angular.bootstrap(document.getElementById("myApp"), ['myApp']);
}

angular.module('myApp', ['myApp.controllers', 'ui.map']);