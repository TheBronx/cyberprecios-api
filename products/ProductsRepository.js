'use strict';

var models = require('../models');

function findDistinctProductCategories() {
  return models.Product.findAll({Attributes: ['category'], group: ['category']});
}

module.exports = {
  findDistinctProductCategories: findDistinctProductCategories
};
