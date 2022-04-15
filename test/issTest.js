const { fetchMyIP } = require('../iss');
const assert = require('chai').assert;

describe("#iss", () => {
  it("should return a string IP via a callback", (done) => {
    fetchMyIP((error, ip) => {
      assert.equal(error, null);

      const expectedType = 'string';

      assert.equal(expectedType, typeof ip);

      done();
    });
  });
});