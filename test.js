const test = require('ava');
const fn = require('./index');

test(t => {
  t.true(fn({'foo-bar': true}).fooBar);
});

test(t => {
  t.true(fn({"Test" : [0,1]}).test.length>0);
});

test(t => {
  t.true(fn({'foo-bar': {'bar-foo' : true}}).fooBar.barFoo);
});

test(t => {
  t.true(fn({'foo-bar': {'bar-foo' : [{'Test': true}]}}).fooBar.barFoo[0].test);
});
