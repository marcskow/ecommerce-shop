import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Product from './model/product';

var serveStatic = require('serve-static');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecommerce');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

router.route('/products').get((req, res) => {
    var term = null;
    if (req.query.term != null && req.query.term != '') {
        term = req.query.term;  
        Product.find()
            .or([{'name': new RegExp(term, 'i')}, {'description': new RegExp(term, 'i')}])
            .exec((err, products) => {
            if (err)
                console.log(err);
            else 
                res.json(products);
        });  
    } else {
        Product.find((err, products) => {
            if (err)
                console.log(err);
            else 
                res.json(products);
        }); 
    }
});

router.route('/products/:id').get((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err)
            console.log(err);
        else
            res.json(product);
    });
});

router.route('/products').post((req, res) => {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': product.id})
        })
        .catch(err => {
            res.status(400).send('Failed to create new product')
        });
});

router.route('/products/:id').post((req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (!product)
            return next(new Error('Could not load document'));
        else if (err)
            console.log(err);
        else {
            product.name = req.body.name;
            product.amount = req.body.amount;
            product.description = req.body.description;
            product.price = req.body.price;
            product.avatar = req.body.avatar;
            product.provider = req.body.provider;
            product.memory = req.body.memory;
            product.dualsim = req.body.dualsim;
            product.os = req.body.os;
            product.externalMemory = req.body.externalMemory;
            product.screen = req.body.screen;
            product.ram = req.body.ram;

            product.save().then(product => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/products/delete/:id').get((req, res) => {
    Product.findByIdAndRemove({_id: req.params.id}, (err, product) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    });
});

app.use(serveStatic('../ecommerce/dist/ecommerce', {'index': ['index.html']}))
app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5555, () => console.log('Express server running on port 5555'));