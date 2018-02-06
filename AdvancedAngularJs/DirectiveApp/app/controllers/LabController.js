(function () {
    'use strict';

    angular
        .module('app')
        .controller('LabController', [LabController]);

    function LabController() {
        var vm = this;
        vm.show = show;

        vm.person = {
            name: 'Samuel Clemens',
            penName: 'Mark Twain'
        };

        function show(){
            alert(JSON.stringify(vm.person));
        };

    }
})();