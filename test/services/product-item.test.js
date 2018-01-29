const assert = require('assert');
const app = require('../../src/app');

describe('\'product-item\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-item');

    assert.ok(service, 'Registered the service');
  });
});
