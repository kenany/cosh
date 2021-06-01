const test = require('tape');
const isFunction = require('lodash.isfunction');

const cosh = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(cosh));
});
