'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var api = (0, _express.Router)();

api.all('/api/*', function (req, res, next) {
  if (req.headers.authorization === 'marianoeibermanesgenial') {
    return next();
  }
  //console.log('authentification denied', req.headers);
  return res.status(404).send('<h1>Authorization Error</h1><br /> <h2>:(</h2>');
});

exports.default = api;
//# sourceMappingURL=auth.js.map