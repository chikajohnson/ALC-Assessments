var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.prototype.getMessage = function () {
        return "Hello World!";
    };
    Alert.prototype.showDialog = function () {
        var message;
        message = this.getMessage();
        alert(message);
    };
    return Alert;
}());
function showAlert() {
    var alertmanager = new Alert();
    alertmanager.showDialog();
}
