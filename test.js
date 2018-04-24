const test = require('ava');
const fn = require('.');

test(t => {
  t.deepEqual(
    fn({'foo-bar': true}),
    { fooBar: true }
  );
});

test(t => {
  t.deepEqual(
    fn({"Test" : [0,1]}),
    { test: [0,1] }
  );
});

test(t => {
  t.deepEqual(
    fn({'foo-bar': {'bar-foo' : true}}),
    { fooBar: { barFoo: true } }
  );
});

test(t => {
  t.deepEqual(
    fn({'foo-bar': {'bar-foo' : [{'Test': true}]}}),
    {'fooBar': {'barFoo' : [{'test': true}]}}
  );
});

test('accepts an array of objects', t => {
  t.deepEqual(
    fn([{foo_bar: true}, {bar_foo: false}, {'bar-foo': 'false'}]),
    [{fooBar: true}, {barFoo: false}, {barFoo: 'false'}]
  );
});
