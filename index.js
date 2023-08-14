
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






// API - ENDPOINT - ROUTE

//products
// API ROUTE, BASE URL, examples - google.com/api/v2/


// CREATE POST /products                    C R U D
app.post('/products', (req,res) => {
    console.log(req.body);
    products.push(req.body)
    res.sendStatus(201).json(req.body)
});

// READ - GET /products
app.get('/products',(req,res) => {
    res.json(products);
});

// READ GET /products/:id
app.get('/products/:id', (req,res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product);
})



//UPDATE PUT /products/:id
app.put('/products/:id', (req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.sendStatus(201).json();
});

//UPDATE PATCH /products/:id

app.patch('/products/:id', (req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]
    products.splice(productIndex,1,{...product, ...req.body})
    res.sendStatus(201).json();
});


//DELETE delete /products/:id

app.delete('/products/:id', (req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products.splice(productIndex, 1)
    res.sendStatus(201).json(product);
});







app.get('/demo', (req,res) => {
    //res.sendStatus(404);
    // res.json(products);  // it is widely used bcz we basically use json data
   //res.status(201).send('<h1>Hello</h1>');  // send  file in the format of html
})






app.listen(8000, () => {
    console.log('server started');
});

