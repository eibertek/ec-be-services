'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expenses = require('./expenses');

var _expenses2 = _interopRequireDefault(_expenses);

var _categories = require('./categories');

var _categories2 = _interopRequireDefault(_categories);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = (0, _express.Router)();

api.use('/expenses', _expenses2.default);
api.use('/categories', _categories2.default);

exports.default = api;
//# sourceMappingURL=index.js.map