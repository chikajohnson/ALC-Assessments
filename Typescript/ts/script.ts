class Alert {
    private getMessage() : string{
        return "Hello World!";
    }

    public showDialog(){
        var message: string;
        message = this.getMessage();
        alert(message);
    }
}

function showAlert(){
    var alertmanager = new Alert();
    alertmanager.showDialog();
}