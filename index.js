var app = require('electron').remote;
var dialog = app.dialog;


document.getElementById("btn-class-file").addEventListener("click", function () {

    dialog.showOpenDialogSync(function (fileNames) {
        console.log("hello");
        if (fileNames === undefined) {
            console.log("No file selected");
        } else {
            console.log(fileNames[0]);
        }
    })
}, false);
