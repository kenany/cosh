var cosh = require('../');
var test = require('tape');
var isNaN = require('lodash.isnan');

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