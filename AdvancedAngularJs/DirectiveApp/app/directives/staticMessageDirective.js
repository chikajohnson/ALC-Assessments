(function () {
    'use strict';

    angular.module ('app').directive ('staticMessageDirective', staticMessageDirective);

   function staticMessageDirective() {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            template: '<h2>This is from a directive</h2>'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();