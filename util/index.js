const fs = require('fs');
const path = require('path');
const app = require('electron').remote;
const dialog = app.dialog;
const readCSVFile = require("./FileUtil/ReadCSVFile.js");

document.getElementById("btn-attendance-file").addEventListener("click", function () {
    let fileNames = dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        document.getElementById("attendance-file").value = path.basename(fileNames[0]);
        // console.log(fileNames[0]);
        readCSVFile.fn(fileNames[0]);
    }
}, false);

document.getElementById("btn-class-file").addEventListener("click", function () {
    let fileNames = dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        document.getElementById("class-file").value = path.basename(fileNames[0]);
        console.log(fileNames[0]);
    }
}, false);