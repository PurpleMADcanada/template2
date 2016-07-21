'use strict';

angular.module('myApp.directives', ['ngRoute'])

.directive("singleWork", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "directives/templates/single-work.html",
        scope: {
            work: "="
        }
    }
});


