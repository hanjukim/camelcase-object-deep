# camelcase-object-deep
> Convert object keys recursivly to camelCase using lodash

## Install

```
$ yarn add camelcase-object-deep
```


## Usage

```js
const camelcaseObjectDeep = require('camelcase-object-deep');

// Convert an object
camelcaseObjectDeep({'foo-bar': true});
//=> {fooBar: true}

// Convert an array of objects
camelcaseObjectDeep([{'foo-bar': true}, {'bar-foo': false}]);
//=> [{fooBar: true}, {barFoo: false}]

camelcaseObjectDeep({'foo-bar': true, nested: {unicorn_rainbow: true}}, {deep: true});
//=> {fooBar: true, nested: {unicornRainbow: true}}
```

```js
const camelcaseObjectDeep = require('camelcase-object-deep');

const argv = require('minimist')(process.argv.slice(2));
//=> {_: [], 'foo-bar': true}

camelcaseObjectDeep(argv);
//=> {_: [], fooBar: true}
```


## API

### camelcaseObjectDeep(input)

#### input

Type: `Object` `Object[]`

Object or array of objects to camelCase.

## License

Apache 2.0 ©
