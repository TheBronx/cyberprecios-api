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

module.exports = {
  mapCategories: mapCategories
};
