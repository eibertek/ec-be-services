#!/usr/bin/env node
"use strict";

import express from 'express';
import http from 'http';
import api from './routes';
import main from './routes/apiRoutes';
import users from './routes/users';
import auth from './middleware/auth';
import config from './conf/dev.conf.js';
import bodyParser from 'body-parser';

let app = express();
app.use(auth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',api);
app.use('/users',users);
app.use('/',main);
app.use((req,res,next) => {
    console.log('Bad URL, Redirecting');
    return res.redirect('/list');
});
http.createServer(app).listen(3000, () => { 
    console.log('Server starts at 3000');
});
