#!/usr/bin/env node

"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _apiRoutes = require('./routes/apiRoutes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _auth = require('./middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_auth2.default);
app.use('/api', _routes2.default);
app.use('/', _apiRoutes2.default);
app.use(function (req, res, next) {
    console.log('Bad URL, Redirecting');
    return res.redirect('/list');
});
_http2.default.createServer(app).listen(3000, function () {
    console.log('Server starts at 3000');
});
//# sourceMappingURL=index.js.map