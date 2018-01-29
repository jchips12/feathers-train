// Initializes the `product-category` service on path `/product-category`
const createService = require('feathers-mongoose');
const createModel = require('../../models/product-category.model');
const hooks = require('./product-category.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'product-category',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-category', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-category');

  service.hooks(hooks);
};
