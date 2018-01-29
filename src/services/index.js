const product = require('./product/product.service.js');
const productCategory = require('./product-category/product-category.service.js');
const productItem = require('./product-item/product-item.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(product);
  app.configure(productCategory);
  app.configure(productItem);
};
