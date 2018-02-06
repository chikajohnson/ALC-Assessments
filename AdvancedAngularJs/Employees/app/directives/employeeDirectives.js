(function () {
    'use strict';

    angular
        .module ('app').directive ('employeeDirective', employeeDirective);

        employeeDirective.$inject = ['$window'];


    function employeeDirective($window) {
        // Usage:
        
        //     <directive></directive>
        // Creates:
        //
        
        var employees = {
            //transclude:true,
            // repslace:true,
            restrict: 'EA',
            scope:{
                employee: '=',
                show:'&'
            },   

            templateUrl:'app/templates/employee.html',
            link: link,
        };

        function link(scope, element, attrs) {
        }
        
        return employees;

       
    }

})();