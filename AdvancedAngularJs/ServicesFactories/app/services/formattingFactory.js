angular
    .module('app')
    .factory('formattingFactory',[ formattingFactory]);

function formattingFactory () {
    alert(338388383);
    function format(input) {
        if (input.length % 2 === 0) {
            return input.toUpperCase();
        } else {
            return input.toLowerCase();
        }
    }

    return {
        format: format
    };
}