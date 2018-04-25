const memoizedCamelCase = require('lodash/memoize')(require('lodash/camelCase'));

const camelcaseObjectDeep = value => {
  if (Array.isArray(value)) {
    return value.map(camelcaseObjectDeep);
  }

  if (typeof value === 'object') {
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
