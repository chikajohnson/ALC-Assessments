(function () {
    'use strict';

    angular
        .module('app')
        .directive('person', person);

    function person() {
        // Usage:     <directive></directive> Creates:
        //
        var directive = {

            restrict: 'E',
            scope: {
                person: '=',
                shakeBody: '&'
            },
            template: 'Pen Name: <input type="text" ng-model="person.name" class="form-control" />Pen N' +
                    'ame: <input type="text" ng-model="person.penName" class="form-control" /><input ' +
                    'type="button" ng-click="shakeBody()" value="shakeBody" class="btn btn-primary"/>' +
                    '<pre>{{person | json}}</pre>',
            link: function (scope, element, attrs) {
                element.bind('mouseenter', function () {
                    element.css('background-color', 'red');
                });

                element.bind('mouseleave', function () {
                    element.css('background-color', 'silver');
                });
            }
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();