const test = require('tape');
const isNaN = require('lodash.isnan');

const cosh = require('../');

test('NaN', function(t) {
  t.plan(1);
  t.ok(isNaN(cosh(NaN)));
});

test('+0', function(t) {
  t.plan(1);
  t.equal(cosh(+0), 1);
});

test('-0', function(t) {
  t.plan(1);
  t.equal(cosh(-0), 1);
});

test('Infinity', function(t) {
  t.plan(1);
  t.equal(cosh(Infinity), Infinity);
});

test('-Infinity', function(t) {
  t.plan(1);
  t.equal(cosh(-Infinity), Infinity);
});
