'use strict';

var _ = require('underscore');

function mapCategories(productCategories) {
  var categories = _.map(productCategories, product => {
    return product.category;
  });

  return {
    categories: categories
  };
}

function mapPictures(product) {
  if (!product.Pictures) return [];

  var pictures = [];
  product.Pictures.forEach(pic => {
    pictures.push({
      url: pic.url
    });
  });
  return pictures;
}

function mapProduct(product) {
  if (!product) return null;

  return {
    id: product.id,
    pccomponentesId: product.pccomponentesId,
    title: product.title,
    category: product.category,
    pccomponentesURL: product.pccomponentesURL,
    amazonURL: product.amazonURL,
    pictures: mapPictures(product)
  };
}

function mapPrice(price) {
  return {
    price: price.price,
    stock: price.stock,
    date: price.createdAt
  };
}

function mapProductPrices(mapProductPrices) {
  return _.map(mapProductPrices, price => mapPrice(price));
}

function mapProducts(products) {
  return _.map(products, product => mapProduct(product));
}

module.exports = {
  mapCategories: mapCategories,
  mapProduct: mapProduct,
  mapProductPrices: mapProductPrices,
  mapProducts: mapProducts
};
