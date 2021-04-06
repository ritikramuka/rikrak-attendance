const fs = require('fs');
const path = require('path');
const app = require('electron').remote;
const dialog = app.dialog;
const readCSVFile = require("./FileUtil/ReadCSVFile.js");
const updateXlsxFile = require("./FileUtil/UpdateXlsxFile.js");

var Attendees = [], classRecordFile;

document.getElementById("btn-attendance-file").addEventListener("click", async function () {
    let fileNames = await dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        let btnVal = path.basename(fileNames[0]);
        btnVal = btnVal.length > 13 ? btnVal.slice(0, 10) + "..." : btnVal;
        document.getElementById("btn-attendance-file").value = btnVal;
        readCSVFile.fn(fileNames[0], Attendees);
    }
}, false);

document.getElementById("btn-class-file").addEventListener("click", function () {
    let fileNames = dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        document.getElementById("btn-class-file").value = path.basename(fileNames[0]);
        classRecordFile = fileNames[0];
    }
}, false);

document.getElementById("btn-mark-attendance").addEventListener("click", function () {
    if(Attendees.length > 0 && classRecordFile != undefined) {
        updateXlsxFile.fn(classRecordFile, Attendees);      
    } else {
        // err alert
    }
})