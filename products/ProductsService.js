'use strict';

var productsRepository = require('./ProductsRepository');
var productsMapper = require('./ProductsMapper');

function retrieveAllCategories() {
  return new Promise((resolve, reject) => {
    productsRepository.findDistinctProductCategories()
      .then(productCategories => {
        resolve(productsMapper.mapCategories(productCategories));
      })
      .catch(err => reject(err));
  });
}

function retrieveProduct(productId) {
  return new Promise((resolve, reject) => {
    productsRepository.findProduct(productId)
      .then(product => {
        resolve(productsMapper.mapProduct(product));
      })
      .catch(err => reject(err));
  });
}

function retrieveProductPrices(productId) {
  return new Promise((resolve, reject) => {
    productsRepository.findProductPrices(productId)
      .then(prices => {
        resolve(productsMapper.mapProductPrices(prices));
      })
      .catch(err => reject(err));
  });
}

function retrieveProductsInCategory(categoryId) {
  return new Promise((resolve, reject) => {
    productsRepository.findProductsInCategory(categoryId)
      .then(products => {
        resolve(productsMapper.mapProducts(products));
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  retrieveAllCategories: retrieveAllCategories,
  retrieveProduct: retrieveProduct,
  retrieveProductPrices: retrieveProductPrices,
  retrieveProductsInCategory: retrieveProductsInCategory
};
