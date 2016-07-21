'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'modules/contact/contact.html',
        controller: 'ContactCtrl'
    });
}])

.controller('ContactCtrl', ['$scope', '$http', '$sce', '$animate', function($scope, $http, $sce, $animate) {
    $scope.animationClass = "slide-left"

    $scope.email = "";
    $scope.message = "";
    $scope.endForm = "";

    $scope.submitContactForm = function(e) {
        var error = false;
        if($scope.email == undefined || $scope.email.length < 5) {
            $scope.emailError = true;
            error = true;
        } else {
            $scope.emailError = false;
        }
        if($scope.message == undefined || $scope.message.length < 1) {
            $scope.messageError = true       
            error = true
        } else {
            $scope.messageError = false;
        }

        if(!error) {
            $http({
                method  : 'POST',
                url     : './mail',
                data  : 'email=' + $scope.email + '&message=' + $scope.message,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data) {
                if (!data.success) {
                    $scope.emailError = data.errors.email;
                    $scope.messageError = data.errors.message;
                } else {
                    $scope.endForm = $sce.trustAsHtml("Thank you :) <br> <br> I'll answer shortly. <br> <br> <a href=\"#/home\" class=\"btn\">&laquo; Go Back</a>");
                    $scope.emailSent = true;
                }
            }).error(function(data) {
                $scope.endForm = $sce.trustAsHtml("Thank you :) <br> <br> I'll answer shortly. <br> <br> <a href=\"#/home\" class=\"btn\">&laquo; Go Back</a>");
                $scope.emailSent = true;
            });
        }
    }

}]);
