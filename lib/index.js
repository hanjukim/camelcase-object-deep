'use strict';

var mapKeys = require('lodash/mapKeys');
var camelCase = require('lodash/camelCase');
var isPlainObject = require('lodash/isPlainObject');

var deepCamelCaseObjectKeys = function deepCamelCaseObjectKeys(o) {
  if (isPlainObject(o)) {
    var newObj = mapKeys(o, function (v, k) {
      return camelCase(k);
    });

    Object.keys(newObj).forEach(function (key) {
      newObj[key] = deepCamelCaseObjectKeys(newObj[key]);
    });

    return newObj;
  } else if (Array.isArray(o)) {
    return o.map(deepCamelCaseObjectKeys);
  }

  return o;
};

module.exports = deepCamelCaseObjectKeys;