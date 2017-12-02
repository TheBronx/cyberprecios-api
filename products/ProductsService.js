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

module.exports = {
  retrieveAllCategories: retrieveAllCategories
};
