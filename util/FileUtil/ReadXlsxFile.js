const fs = require("fs");
const XLSX = require("xlsx");

function readXlsxFile(fileName) {
    const workbook = XLSX.readFile(fileName);
    const sheet_name_list = workbook.SheetNames;

    const worksheet = workbook.Sheets[sheet_name_list[0]];
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    for (const R = range.s.r + 2; R <= range.e.r; R++) {
        const cell_address = { c: 1, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);
        const email = worksheet[cell_ref].v;
        console.log(email);
    }
}

module.exports = {
    fn: readXlsxFile,
}