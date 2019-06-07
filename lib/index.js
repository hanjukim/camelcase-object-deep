"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var memoizedCamelCase = require('lodash/memoize')(require('lodash/camelCase'));

var camelcaseObjectDeep = function camelcaseObjectDeep(value) {
  if (Array.isArray(value)) {
    return value.map(camelcaseObjectDeep);
  }

  if (value && _typeof(value) === 'object' && value.constructor === Object) {
    var obj = {};
    var keys = Object.keys(value);
    var len = keys.length;

    for (var i = 0; i < len; i += 1) {
      obj[memoizedCamelCase(keys[i])] = camelcaseObjectDeep(value[keys[i]]);
    }

    return obj;
  }

  return value;
};

module.exports = camelcaseObjectDeep;