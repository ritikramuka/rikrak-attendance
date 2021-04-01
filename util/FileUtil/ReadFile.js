const fs = require('fs');

function readFile(fileName) {
    const users = [];
    fs.readFile(fileName, 'utf16le', function (err, data) {
        if (err)
            return;
            var dataArray = data.split(/\r?\n?\t/);
            for (let i = 0; i < dataArray.length; i++) {
                if (emailRegexp.test(dataArray[i]) == true) {
                const user = {
                    userEmail: dataArray[i],
                    timeStamp: dataArray[i - 1]
                }
                users.push(user);
            }
        }
        console.table(users);
    })
}

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = {
    fn: readFile,
}