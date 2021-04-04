const fs = require('fs');
const path = require('path');
const app = require('electron').remote;
const dialog = app.dialog;
const readCSVFile = require("./FileUtil/ReadCSVFile.js");
const readXlsxFile = require("./FileUtil/ReadXlsxFile.js");

var Attendees = [];

document.getElementById("btn-attendance-file").addEventListener("click", async function () {
    let fileNames = await dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        let btnVal = path.basename(fileNames[0]);
        btnVal = btnVal.length > 13 ? btnVal.slice(0, 10) + "..." : btnVal;
        document.getElementById("btn-attendance-file").value = btnVal;
        readCSVFile.fn(fileNames[0], Attendees);
        console.log(Attendees);
        // for (const key in Attendees) {
        //     if (Object.hasOwnProperty.call(Attendees, key)) {
        //         const element = Attendees[key];
        //         console.log(element);
        //     }
        // }
    }
}, false);

document.getElementById("btn-class-file").addEventListener("click", function () {
    let fileNames = dialog.showOpenDialogSync();
    if (fileNames === undefined) {
        console.log("No file selected");
    } else {
        document.getElementById("btn-class-file").value = path.basename(fileNames[0]);
        readXlsxFile.fn(fileNames[0]);
    }
}, false);