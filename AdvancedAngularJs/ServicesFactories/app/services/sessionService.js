angular.module('app').service('sessionService', ['$window', 'formattingFactory', sessionService]);

function sessionService($window, formattingFactory){
    var format = formattingFactory;
    this.save = save;
    this.get = get;
    this.clear = clear;
    
    function save(key, value){
        $window.sessionStorage.setItem(key, format.format(value));
    }

    function get(key, value){
        return $window.sessionStorage.getItem(key);
    }

    function clear() {
        $window.sessionStorage.clear();
    }
}