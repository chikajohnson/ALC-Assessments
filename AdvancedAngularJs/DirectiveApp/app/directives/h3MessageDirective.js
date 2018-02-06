(function () {
    'use strict';

    angular.module ('app').directive ('h3MessageDirective', h3MessageDirective);

   function h3MessageDirective() {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            //replace: true,
            transclude:true,
            scope: {
                title: '@'
            },
            template: '<h3>{{title}}</h3>',
            link: function (scope, element, attrs) {
                element.bind('mouseenter', function () {
                    element.css('background-color', 'red')
                });

                element.bind('mouseleave', function () {
                    element.css('background-color', 'silver')
                });
            }
        };
        return directive;

       
    }

})();