// Initializes the `utilities` service on path `/api/v1/utilities`
const createService = require('./utilities.class.js');
const hooks = require('./utilities.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'utilities',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/utilities', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/v1/utilities');

  service.hooks(hooks);
};
