const memoizedCamelCase = require('lodash/memoize')(require('lodash/camelCase'));

const camelcaseObjectDeep = value => {
  if (Array.isArray(value)) {
    return value.map(camelcaseObjectDeep);
  }

  if (value && typeof value === 'object' && value.constructor === Object) {
    const obj = {};
    const keys = Object.keys(value);
    const len = keys.length;

    for (let i = 0; i < len; i += 1) {
      obj[memoizedCamelCase(keys[i])] = camelcaseObjectDeep(value[keys[i]]);
    }

    return obj;
  }

  return value;
}

module.exports = camelcaseObjectDeep;
