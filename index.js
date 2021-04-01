var app = require('electron').remote;
var dialog = app.dialog;
var path = require('path');


document.getElementById("btn-class-file").addEventListener("click", function () {
    let fileNames = dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        document.getElementById("class-file").value = path.basename(fileNames[0]);
        console.log(fileNames[0]);
    }
}, false);

