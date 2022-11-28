const assert = require('assert').strict;
const app = require('../app');

describe('CORS unit test', function () {

    it('Should return the same object', function () {
        app.lambdaHandler(null, null).then((response) => {
            assert.strictEqual(response.statusCode, 200);
            assert.strictEqual(response.headers['Access-Control-Allow-Methods'], 'OPTIONS,POST');
            assert.strictEqual(response.headers['Access-Control-Allow-Headers'], 'application/json');
            assert.strictEqual(response.headers['Access-Control-Allow-Origin'], 'https://dak1pni58hzx7.cloudfront.net/');
        });

    });
});