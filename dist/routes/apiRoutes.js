'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _express = require('express');

var api = (0, _express.Router)();

api.get('/list', function (req, res, next) {
      return res.json({
            status: 'OK',
            services: [{ name: 'expenses', url: '/api/expenses' }, { name: 'categories', url: '/api/categories' }]
      });
});

exports.default = api;
//# sourceMappingURL=apiRoutes.js.map