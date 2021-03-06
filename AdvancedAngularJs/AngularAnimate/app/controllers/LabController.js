angular.module('app').controller('LabController', [LabController]);

function LabController(){
    var vm = this;
    vm.alerts = [];
    
    vm.addDanger = addDanger;
    vm.addWarning = addWarning;
    vm.dismissAlert = dismissAlert;
    
    function addDanger() {
    addAlert('danger', 'Danger, Will Robinson! Danger!');
    }
    
    function addWarning() {
    addAlert('warning', 'Warning! Warning! Alien approaching!');
    }
    
    function addAlert(type, text) {
    vm.alerts.push({ type: type, text: text });
    }
    
    function dismissAlert(index) {
    vm.alerts.splice(index, 1);
    }

}