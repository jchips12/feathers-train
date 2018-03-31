const users = require('./users/users.service.js');
const copyUser = require('./custom/copy-user.service.js');
const utilities = require('./utilities/utilities.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(copyUser);
  app.configure(utilities);
};
