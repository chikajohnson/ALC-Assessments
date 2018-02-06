angular.module('app').controller('sessionController', ['sessionService', 'sessionFactory',sessionController]);

function sessionController(sessionService,sessionFactory){
    var vm = this;
    var mySessionFactory =  sessionFactory;
    vm.clearFactorySession = clearFactorySession;

    function getFactorySession() {
        vm.model = {
            name: mySessionFactory.get('name'),
            nickname: mySessionFactory.get('nickname'),
            status: 'Retrieved by Factory on ' + new Date()
        };
    }

    function setFactorySession() {
        mySessionFactory.save('name', vm.model.name);
        mySessionFactory.save('nickname', vm.model.nickname);
        getFactorySession();
    }

    function clearFactorySession(){
        mySessionFactory.clear();
        getFactorySession();
    }
    vm.getSessionService = function(){
        vm.model = {
            name: sessionService.get('name'),
            nickname: sessionService.get('nickname'),
            status: 'Retrieved by service on ' + new Date()
        };
    };

    vm.setServiceSession = function() {
        sessionService.save('name', vm.model.name);
        sessionService.save('nickname', vm.model.nickname);
        vm.getSessionService();
     } ;

    vm.clearServiceSession = function() {
        sessionService.clear();
        //vm.getServiceSession();
     };

}