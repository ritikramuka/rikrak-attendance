const fs = require('fs');

function readCSVFile(fileName, AttendeesInfo) {
    const data = fs.readFileSync(fileName, 'utf16le');
    var dataArray = data.split(/\r?\n?\t/);
    for (let i = 0; i < dataArray.length; i++) {
        if (emailRegexp.test(dataArray[i]) == true) {
            const userEmail = dataArray[i];
            const timeStamp = dataArray[i - 1];
            if ((Number)(timeStamp.split('m')[0]) >= 50) //change time as per college requirements
                AttendeesInfo.push(userEmail);
        }
    }
}

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = {
    fn: readCSVFile,
}