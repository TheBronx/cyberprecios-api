'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var database = require('./Database');
var productsService = require('./products/ProductsService');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products/categories', (req, res) => {
  productsService.retrieveAllCategories()
    .then(categories => res.send(categories))
    .catch(err => res.status(500).send({ error: err.toString() }));
});

app.get('/products/:product', (req, res) => {
  productsService.retrieveProduct(req.params.product)
    .then(product => {
      if (!product) res.status(404).send({ error: 'Product not found' });
      else res.send(product);
    })
    .catch(err => res.status(500).send({ error: err.toString() }));
});

app.get('/products/:product/prices', (req, res) => {
  productsService.retrieveProductPrices(req.params.product)
    .then(prices => {
      if (!prices) res.status(404).send({ error: 'Product not found' });
      else res.send(prices);
    })
    .catch(err => res.status(500).send({ error: err.toString() }));
});

app.get('/products/categories/:category', (req, res) => {
  productsService.retrieveProductsInCategory(req.params.category)
    .then(products => res.send(products))
    .catch(err => res.status(500).send({ error: err.toString() }));
});


database.connect()
  .then(() => {
    app.listen(3000, () => console.log('API listening on port 3000'));
  })
  .catch(err => console.log(err));
