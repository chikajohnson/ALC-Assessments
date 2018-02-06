
    var helloWorldApp = angular.module('helloWorldApp', []);
    helloWorldApp.controller('firstController', [ '$scope',function($scope){
        $scope.appName = 'An App Name';
    }]);
