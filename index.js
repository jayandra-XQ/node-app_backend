
// creating server using express
const express = require('express');
const app = express();
const morgan = require('morgan');  // third party middleware
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')



// bodyParser
app.use(express.json()); //in-built  middleware
// app.use(express.urlencoded())


 // used when we send some data through from --- it encoded the url
//app.use(express.urlencoded());

//for logger - 'dev' - 'default'
app.use(morgan('default'));
app.use(express.static('public'));
app.use('/', productRouter);
app.use('/users', userRouter);


//  MVC -- model-view-controller

//        C R U D



app.get('/demo', (req,res) => {
    //res.sendStatus(404);
    // res.json(products);  // it is widely used bcz we basically use json data
   //res.status(201).send('<h1>Hello</h1>');  // send  file in the format of html
})






app.listen(8000, () => {
    console.log('server started');
});

