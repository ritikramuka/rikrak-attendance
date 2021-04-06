const fs = require("fs");
const XLSX = require("xlsx");

function updateXlsxFile(fileName, Attendees) {
    const file = XLSX.readFile(fileName);

    let data = [];

    const ClassSheet = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
    ClassSheet.forEach((res) => {
        data.push(res);
    });

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yy = String(today.getFullYear()).slice(2);
    today = dd + "/" + mm + "/" + yy;

    data.forEach((obj) => {
        obj[today] = "A";
        for (const [key, value] of Object.entries(Attendees)) {
            if (value === obj["MS Teams ID"]) obj[today] = "P";
        }
    });

    const newWB = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(newWB, ws, file.SheetNames[0]);

    XLSX.writeFile(newWB, fileName);
}

module.exports = {
    fn: updateXlsxFile,
};