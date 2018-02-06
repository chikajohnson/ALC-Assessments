angular
    .module('app')
    .factory('sessionFactory', ['$window', 'formattingFactory', sessionFactory]);

function sessionFactory($window, formattingFactory) {
    var formatText = formattingFactory;
    function save(key, value) {
        $window.sessionStorage.setItem(key, formatText.format(value));
     }

     function get(key) {
        return $window.sessionStorage.getItem(key);
     }

     function clear() {
        $window.sessionStorage.clear();
     }

    return {
        save: save, 
        get: get, 
        clear: clear
    };
}