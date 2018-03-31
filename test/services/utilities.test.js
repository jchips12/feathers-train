const assert = require('assert');
const app = require('../../src/app');

describe('\'utilities\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/utilities');

    assert.ok(service, 'Registered the service');
  });
});
