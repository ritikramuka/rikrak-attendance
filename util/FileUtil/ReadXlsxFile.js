const fs = require("fs");
const XLSX = require("xlsx");

function readXlsxFile(fileName) {
    var workbook = XLSX.readFile(fileName);
    console.table(workbook.SheetNames[0]);
}

module.exports = {
    fn: readXlsxFile,
}