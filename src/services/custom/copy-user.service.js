const { disallow, iff } = require('feathers-hooks-common');

module.exports = function (app) {
  const UserService = app.service('api/v1/users');
  app.use('/api/v1/custom/copy', {
    async get(id, params) {
      return await UserService.get(id);
    },
    async find(params) {
      return await UserService.get(params.query._id);
    }
  });

  app.service('/api/v1/custom/copy').hooks({
    before: {
      get: [
        disallow('external'),
        context => {
          console.log(context.method + ' ' + context.path);
        }
      ],
      find: [
        context => {
          console.log(context.method + ' ' + context.path);
        }
      ],
    }
  });
};
