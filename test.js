const test = require('ava');
const fn = require('./src');

test('simple case', t => {
  t.deepEqual(
    fn({'foo-bar': true}),
    { fooBar: true }
  );
});

test('array value', t => {
  t.deepEqual(
    fn({'Test' : [0,1]}),
    { test: [0,1] }
  );
});

test('2 depth', t => {
  t.deepEqual(
    fn({'foo-bar': {'bar-foo' : true}}),
    { fooBar: { barFoo: true } }
  );
});

test('2 depth with array value', t => {
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

test('plain object test', t => {
  t.deepEqual(
    fn({ a: new Date('2019-06-07T13:32:21.936Z'), b: { cd: 1234, ef: true } }),
    { a: new Date('2019-06-07T13:32:21.936Z'), b: { cd: 1234, ef: true } }
  );
});
