// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import Product from './model/product';

var express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Productexp = require('./model/product');
var Orderexp = require('./model/order');
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

var Product = mongoose.model('Product', Productexp );

var Order = mongoose.model('Order', Orderexp );

router.route('/orders').get((req, res) => {
  let realized = req.params.realized
  Order.find()
    .and([{'realized': realized}])
    .exec((err, orders) => {
      if (err)
        console.log(err);
      else
        res.json(orders);
    });
});

router.route('/orders').post((req, res) => {
  let order = new Order(req.body);
  order.save()
    .then(order => {
      res.status(200).json({'order': order.id})
    })
    .catch(err => {
      res.status(400).send('Failed to create new order')
    });
});

router.route('/order/realized/:id').post((req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err)
      console.log(err);
    else {
      let newOrder = order;
      newOrder.realized = true;
      newOrder.save().then(order => {
        res.status(200).json({'order': order.id})
      })
        .catch(err => {
          res.status(400).send('Failed to create new order')
        });
    }
  })
});

// MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

router.route('/products').get((req, res) => {
  var mongoFilters = []
  var providers = []
  var memories = []
  var rams = []
  var oses = []
//{ 'genres': { $in: ['Horror','Comedy'] } }
  if (req.query.filters != null && req.query.filters != '') {
    var filters = JSON.parse(req.query.filters);
    filters.forEach(filter => {
      if (filter.attribute == 'provider') {
        providers.push(filter.value);
      } else if (filter.attribute == 'ram') {
        rams.push(filter.value);
      } else if (filter.attribute == 'os') {
        oses.push(filter.value);
      } else if (filter.attribute == 'memory') {
        memories.push(filter.value);
      }
    });
    if (providers.length != 0) {
      // mongoFilters.push({[filter.attribute]:filter.value});
      mongoFilters.push({'provider': { $in: providers}});
    }
    if (memories.length != 0) {
      mongoFilters.push({'memory': { $in: memories}});
    }
    if (rams.length != 0) {
      mongoFilters.push({'ram': {$in: rams}});
    }
    if (oses.length != 0) {
      mongoFilters.push({'os': {$in: oses}});
    }
  }

  var term = null;
  if (req.query.term != null && req.query.term != '') {
    term = req.query.term;
    Product.find()
      .and(or([{'name': new RegExp(term, 'i')}, {'description': new RegExp(term, 'i')}]), ...mongoFilters)
      .exec((err, products) => {
        if (err)
          console.log(err);
        else
          res.json(products);
      });
  } else if (mongoFilters.length != 0) {
    Product.find()
      .and(...mongoFilters)
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

// app.use(serveStatic('../ecommerce/dist/ecommerce', {'index': ['index.html']}))
app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5555, () => console.log('Express server running on port 5555'));
