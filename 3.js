const csv = require("csv-parse");
const fs = require('fs');
const res = [];

fs.createReadStream('/file.txt')
    .pipe(csv({ record_delimiter: ' ' }))

    .on('data', (data) => res.push(data))
    .on('end', () => {
        var value = 0;
        for (var i = 1; i < res.length; i++)
            value += parseInt(res[i][2]);
        console.log(value);
    })
    .on('error', (err) => {
        console.log("error: " + err);
    });