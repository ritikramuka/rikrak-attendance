const fs = require("fs");
const XLSX = require("xlsx");

function readXlsxFile(fileName) {
    var workbook = XLSX.readFile(fileName);
    var sheet_name_list = workbook.SheetNames;


    var worksheet = workbook.Sheets[sheet_name_list[0]];
    var range = XLSX.utils.decode_range(worksheet['!ref']);
    for (let R = range.s.r + 2; R <= range.e.r; R++) {
        var cell_address = { c: 1, r: R };
        var cell_ref = XLSX.utils.encode_cell(cell_address);
        var email = worksheet[cell_ref].v;
        console.log(email);
    }
}

module.exports = {
    fn: readXlsxFile,
}