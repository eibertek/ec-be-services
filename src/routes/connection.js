import mongoose from 'mongoose';
import config from '../conf/dev.conf.js';

//const dbString = 'mongodb://etek001:m1a9r8i4@etek01-shard-00-00-ryd3a.mongodb.net:27017,etek01-shard-00-01-ryd3a.mongodb.net:27017,etek01-shard-00-02-ryd3a.mongodb.net:27017/etek01?ssl=true&replicaSet=etek01-shard-0&authSource=admin';  
const dbString = 'mongodb://localhost:27017/etek01';  
let itsConnected=false;

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbString);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
