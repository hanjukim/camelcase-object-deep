/* globals bench suite set */
'use strict';
const Benchmark = require('benchmark');

const camelcaseKeys = require('camelcase-keys');
const camelcaseObjectDeepNpm = require('camelcase-object-deep');
const camelcaseObjectDeep = require('../src');
const fixture = require('./fixture');

const suite = new Benchmark.Suite('camelcaseObjectDeep', { minTime: 1000 });

suite.add('camelcaseKeys', () => {
  camelcaseKeys(fixture, {deep: true});
}).add('npm', () => {
  camelcaseObjectDeepNpm(fixture);
}).add('master', () => {
  camelcaseObjectDeep(fixture);
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ async: true });
