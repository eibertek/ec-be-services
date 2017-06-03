#!/usr/bin/env node
"use strict";

import express from 'express';
import http from 'http';
import api from './routes';
import main from './routes/apiRoutes';
import auth from './middleware/auth';

let app = express();
app.use(auth);
app.use('/api',api);
app.use('/',main);
app.use((req,res,next) => {
    console.log('Bad URL, Redirecting');
    return res.redirect('/list');
});
http.createServer(app).listen(3000, () => { 
    console.log('Server starts at 3000');
});
