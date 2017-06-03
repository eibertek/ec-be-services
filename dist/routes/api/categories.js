'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var api = (0, _express.Router)();

api.get('/', function (req, res) {
  res.json({ status: 'OK', types: 'categories in expenses control' });
});

exports.default = api;
//# sourceMappingURL=categories.js.map