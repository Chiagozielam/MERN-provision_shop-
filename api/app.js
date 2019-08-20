const express= require('express');
const app = express();
const cors = require ('cors');
const bodyParser = require('body-parser')
const mongoose = require ('mongoose');

// ----ALL MODELS HERE------------- 
const allProducts = require('./model/allProducts')
const coco = require('./model/coco');
const milk = require('./model/milk');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
mongoose.connect("mongodb://127.0.0.1:27017/provision", {useNewUrlParser: true})
.then(() => console.log("Db connection successful!"))
.catch( err => console.log(err));   

app.use(cors());
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

app.get("/", (req, res) => {
    message = "hello and welcome to backend!";
    res.send(message);
})


// --------GET AND POST ROUTE FOR ALL THE PRODUCT IN THE DATABASE----------------
app.get('/products', (req, res, next) => {
    allProducts.find({})
        .then((data) => {
            console.log(`Here is your data from products ${data}`);
            res.send(data)
        })
        .catch( err => console.log(`the error is ${err}`)
        );
})

app.post('/products', (req, res) => {
    const data = req.body;
    const add = new allProducts(data);
    add.save()
    .then( item => {
        res.json(item);
        console.log(`Here is your data from products ${item}`);
    })
    .catch( err => console.log(err))
})


// --------GET AND POST ROUTE FOR ALL COCO PRODUCTS IN THE DATABASE----------------
app.get('/coco', (req, res, next) => {
    coco.find({})
        .then((data) => {
            console.log(`Here is your data ${data}`);
            res.send(data)
        })
        .catch( err => console.log(`the error is ${err}`)
        );
})

app.post('/coco', (req, res) => {
    const data = req.body;
    const add = new coco(data);
    add.save()
    .then( item => {
        res.json(item);
        console.log(`Here is your data from coco ${item}`);
    })
    .catch( err => console.log(err))
})

// --------GET AND POST ROUTE FOR ALL MILK PRODUCTS IN THE DATABASE----------------
app.get('/milk', (req, res, next) => {
    milk.find({})
        .then((data) => {
            console.log(`Here is your data ${data}`);
            res.send(data)
        })
        .catch( err => console.log(`the error is ${err}`)
        );
})

app.post('/milk', (req, res) => {
    const data = req.body;
    const add = new milk(data);
    add.save()
    .then( item => {
        res.json(item);
        console.log(`Here is your data from milk ${item}`);
    })
    .catch( err => console.log(err))
})


const port = process.env.PORT || 5000;


app.listen( port, () => console.log(`listening on port ${port}`));



