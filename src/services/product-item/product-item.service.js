// Initializes the `product-item` service on path `/product-item`
const createService = require('feathers-mongoose');
const createModel = require('../../models/product-item.model');
const hooks = require('./product-item.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'product-item',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-item', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-item');

  service.hooks(hooks);
};
