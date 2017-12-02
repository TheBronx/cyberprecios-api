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
  res.send('Product ' + req.params.product);
});

app.get('/products/categories/:category', (req, res) => {
  res.send('Category ' + req.params.category);
});

database.connect()
  .then(() => {
    app.listen(3000, () => console.log('API listening on port 3000'));
  })
  .catch(err => console.log(err));
