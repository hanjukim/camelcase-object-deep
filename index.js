const mapKeys = require('lodash/mapKeys');
const camelCase = require('lodash/camelCase');
const isPlainObject = require('lodash/isPlainObject');

const deepCamelCaseObjectKeys = o => {
  if (isPlainObject(o)) {
    const newObj = mapKeys(o, (v, k) => camelCase(k));

    Object.keys(newObj).forEach(key => {
      newObj[key] = deepCamelCaseObjectKeys(newObj[key]);
    });

    return newObj;
  } else if (Array.isArray(o)) {
    return o.map(deepCamelCaseObjectKeys);
  }

  return o;
}

module.exports = deepCamelCaseObjectKeys;
