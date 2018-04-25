'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var memoizedCamelCase = require('lodash/memoize')(require('lodash/camelCase'));

var camelcaseObjectDeep = function camelcaseObjectDeep(value) {
  if (Array.isArray(value)) {
    return value.map(camelcaseObjectDeep);
  }

  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
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