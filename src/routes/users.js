import { Router} from 'express';
import mongoose from 'mongoose';
import usersModel from '../models/usersModel';
import {status} from '../models/usersModel';
import uuid from 'uuid';
import config from '../conf/dev.conf.js';


//const dbString = 'mongodb://etek001:m1a9r8i4@etek01-shard-00-00-ryd3a.mongodb.net:27017,etek01-shard-00-01-ryd3a.mongodb.net:27017,etek01-shard-00-02-ryd3a.mongodb.net:27017/etek01?ssl=true&replicaSet=etek01-shard-0&authSource=admin';  
const dbString = 'mongodb://localhost:27017/etek01';  
let itsConnected=false;
let api = Router();
mongoose.connect(dbString);
api.get('/:user', function (req, res) {
  let search = req.params.user ? {'id':req.params.user} : {}
  usersModel.find(search).then((data)=>{
    return res.status(200).json(data);
  });
  //return res.status(401).send("Not ready yet");
});

api.post('/new', function (req, res) {
  let result= validateData(req.body);
  if(result !== true){
    return res.status(500).json({status:result});
  }
  validateExistingUser(req.body).then((result, err)=>{
    if(result.length && result.length > 0 ){
      return res.status(500).json({status:0, error:'User already exist'});
    }
    //save user and send mail about
      let user = new usersModel({
        id: uuid.v1(),
        userName: req.body.userName,
        password: req.body.password,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        status: status.ONBOARD      
      });
      user.save(() => {
        console.log('grabando');
        mongoose.connection.close();        
        return res.status(200).json({status:'ok'});
      });
  });
  //validate password complexity
});

const validateData = (dataQuery) => {
  if(!dataQuery.userName) return 'Invalid UserName';
  if(!dataQuery.password) return 'Invalid password';
  if(!dataQuery.name) return 'Invalid name';
  if(!dataQuery.lastName) return 'Invalid lastName';
  if(!dataQuery.email) return 'Invalid Email';
  return true;
}

const validateExistingUser = (dataQuery) => {
  //Validate user doesnt exist
  return usersModel.find({userName:dataQuery.userName});
}

api.get('/edit', function (req, res) {});
api.get('/ban', function (req, res) {});
api.get('/delete', function (req, res) {});
api.get('/validate', function (req, res) {});

export default api;
/*
api.get('/new', function (req, res) {
  const dataQuery = req.query;
  if(!dataQuery.name){
    return res.json({
      status:500, 
      error:'No data sent!'
    })
  }
  return processPromise(req, res);
});

api.get('/new', function (req, res) {
  const dataQuery = req.query;
  if(!dataQuery.name){
    return res.json({
      status:500, 
      error:'No data sent!'
    })
  }
  return processPromise(req, res);
});

api.get('/edit', function (req, res) {
  const dataQuery = req.query;
  if(!dataQuery.name){
    return res.json({
      status:500, 
      error:'No data sent!'
    })
  }
  return editExpense(dataQuery.id, dataQuery.name, dataQuery.value, res);
});

api.get('/delete/:id', function (req, res) {
  const dataQuery = req.params;
  return deleteExpense(dataQuery.id, res);
  //return res.status(400).send({query:dataQuery});
});

export default api;

const processPromise = (req, res) => {
  const dataQuery = req.query;
  return saveExpense(dataQuery.name, dataQuery.value).then(
  (dat)=>{
    return res.json({
      err: dat
    })
  },
  (dat)=>{
    return res.json({
      status: dat
    })
  });
}

const editExpense = (id, name, value, res) => {
  expensesModel.findOneAndUpdate({'id':id}, {name:name, value:value}, {upsert:true}, function(err, doc){
      if (err) return res.status(500).send({ error: err });
      return res.json({status:"saved"});
  });
}

const deleteExpense = (id, res) => {
  expensesModel.findOneAndRemove({'id':id}, function(err, doc){
      if (err) return res.status(500).send({ error: err });
      return res.json({status:"removed", document:doc});
  });
}

const saveExpense = (name, value) => {
  let expense = new expensesModel({id:uuid.v1(), name:name, value:value},{id:false});
  return new Promise((res, rej)=>{
    expense.save((err, stat) => { 
            err ? rej(err) : res(stat); 
    });
  }); 
}

const returnAllExpenses = () => {
  return expensesModel.find({}, (err, data) => {
    return data;
  });
}
*/
