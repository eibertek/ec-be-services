'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var api = (0, _express.Router)();

api.get('/', function (req, res) {
  return res.json({ status: 'OK', types: 'expenses control' });
});

api.get('/new', function (req, res) {
  console.log('expenses_new');
  return res.json({ status: 'OK', types: 'expenses control' });
});

exports.default = api;
//# sourceMappingURL=expenses.js.map