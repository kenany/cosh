var test = require('tape');
var isFunction = require('lodash.isfunction');

var cosh = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(cosh));
});
