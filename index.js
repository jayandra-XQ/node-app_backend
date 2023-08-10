// server created using nodejs
const http = require('http'); 
const fs = require('fs');

//  to read the static file
const index = fs.readFileSync('index.html','utf-8'); 


// to read the json file
const data = fs.readFileSync('data.json','utf-8');

const server = http.createServer((req,res) => {

    console.log(req.url);
    
    // res.setHeader('Dummy','dummyValue');
    res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Content-Type', 'Text/html');
    res.end(data);   // we have to convert data into string using json.stringfy
})
console.log('server started');
server.listen(8000);
