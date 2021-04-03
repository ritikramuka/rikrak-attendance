const fs = require('fs');

const Attendees = [];

function readCSVFile(fileName) {
    fs.readFile(fileName, 'utf16le', function (err, data) {
        if (err)
            return;
        var dataArray = data.split(/\r?\n?\t/);
        for (let i = 0; i < dataArray.length; i++) {
            if (emailRegexp.test(dataArray[i]) == true) {
                const userEmail = dataArray[i];
                const timeStamp = dataArray[i - 1];
                if ((Number)(timeStamp.split('m')[0]) >= 2)
                    Attendees.push(userEmail);
            }
        }
    })
}

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = {
    fn: readCSVFile,
    data: readCSVFile,
}