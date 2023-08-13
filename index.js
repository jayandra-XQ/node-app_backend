
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8'); 
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

// creating server using express

const express = require('express');
const app = express();
const morgan = require('morgan');  // third party middleware

// bodyParser
app.use(express.json()); //in-built  middleware
// app.use(express.urlencoded())


 // used when we send some data through from --- it encoded the url
//app.use(express.urlencoded());

//for logger - 'dev' - 'default'
app.use(morgan('default'));
app.use(express.static('public'));

// MiddleWare - Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle
// app.use((req, res, next ) => {
//     console.log( req.method, req.ip, new Date, req.hostname, req.get('User-Agent'))  // Server log
//     next()
// })


// authorization

const auth = (req,res,next) => {
    // console.log(req.query)
    // if (req.body.password == '123') {
        
    //     next();
    // } else {
    //     res.sendStatus(401);
    // }

    next();
}

app.use(auth);


// API - ENDPOINT - ROUTE

app.get('/product/:id',auth, (req,res) => {
    console.log(req.params)
    res.json({type: 'GET'})
});

app.post('/',auth, (req,res) => {
    res.json({type: 'POST'})
});

app.put('/', (req,res) => {
    res.json({type: 'PUT'})
});

app.delete('/',(req,res) => {
    res.json({type: 'DELETE'})
});

app.patch('/', (req,res) => {
    res.json({type: 'PATCH'})
});






app.get('/demo', (req,res) => {
    //res.sendStatus(404);
    // res.json(products);  // it is widely used bcz we basically use json data
   //res.status(201).send('<h1>Hello</h1>');  // send  file in the format of html
})






app.listen(8000, () => {
    console.log('server started');
});

