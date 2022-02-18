"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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