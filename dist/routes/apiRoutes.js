'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expensesModel = require('../models/expensesModel');

var _expensesModel2 = _interopRequireDefault(_expensesModel);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = (0, _express.Router)();
var dbString = 'mongodb://etek001:m1a9r8i4@etek01-shard-00-00-ryd3a.mongodb.net:27017,etek01-shard-00-01-ryd3a.mongodb.net:27017,etek01-shard-00-02-ryd3a.mongodb.net:27017/etek01?ssl=true&replicaSet=etek01-shard-0&authSource=admin';
_mongoose2.default.connect(dbString);

api.get('/list', function (req, res, next) {
  return res.json({
    status: 'OK',
    services: [{ name: 'expenses', url: '/api/expenses' }, { name: 'categories', url: '/api/categories' }]
  });
});

api.get('/test-mongodb', function (req, res, next) {
  returnAllExpenses().then(function (data) {
    return res.json({
      status: 'OK',
      data: data
    });
  });
});

api.get('/addExpense', function (req, res, next) {
  saveExpense().then(function (err, st) {
    return res.json({
      error: err,
      status: st
    });
  });
});

var saveExpense = function saveExpense(name, value) {
  var expense = new _expensesModel2.default({ id: _uuid2.default.v1(), name: name, value: value }, { _id: false });
  return expense.save();
};
var returnAllExpenses = function returnAllExpenses() {
  return _expensesModel2.default.find({}, function (err, data) {
    return data;
  });
};
exports.default = api;
//# sourceMappingURL=apiRoutes.js.map