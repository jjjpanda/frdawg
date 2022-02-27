const {argv} = process
const [exe, scriptName, API_KEY] = argv

const FOLDER_ID = "1EtXAVavOYZeUTy-rOGNiadFhSKm4C3jX"

const https = require('https')
const fs = require('fs')

https.get(`https://www.googleapis.com/drive/v3/files?q=%27${FOLDER_ID}%27+in+parents&key=${API_KEY}`, (res) => {
    console.log(res.statusCode, res.statusMessage)
    
    let data = [];
    res.on('data', chunk => {
      data.push(chunk);
    });

    res.on('end', () => {
        console.log('Response ended: ');
        const bodyBuffer = Buffer.concat(data).toString();
        const body = JSON.parse(bodyBuffer);
        console.log(body)
        fs.writeFile("./res/list.js", `const list = ${JSON.stringify(body.files)}`, (err) => {
            console.log("Writing File | Error", err ? err : "N/A")
        })  
    });
}).on('error', err => {
    console.log('Error: ', err.message);
})