const assert = require('assert');
const app = require('../../src/app');

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/users');

    assert.ok(service, 'Registered the service');
  });
});
