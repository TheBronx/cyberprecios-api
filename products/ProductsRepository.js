'use strict';

var models = require('../models');

function findDistinctProductCategories() {
  return models.Product.findAll({Attributes: ['category'], group: ['category']});
}

function findProduct(productId) {
  return models.Product.findOne({
    where: {
      id: productId
    }
  });
}

function findProductPrices(productId) {
  return models.Price.findAll({
    where: {
      productId: productId
    }
  });
}

function findProductsInCategory(categoryId) {
  return models.Product.findAll({
    where: {
      category: categoryId
    }
  });
}

module.exports = {
  findDistinctProductCategories: findDistinctProductCategories,
  findProduct: findProduct,
  findProductPrices: findProductPrices,
  findProductsInCategory: findProductsInCategory
};
