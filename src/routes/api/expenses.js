import { Router} from 'express';
import mongoose from 'mongoose';
import expensesModel from '../../models/expensesModel';
import uuid from 'uuid';
import config from '../../conf/dev.conf';

//const dbString = 'mongodb://etek001:m1a9r8i4@etek01-shard-00-00-ryd3a.mongodb.net:27017,etek01-shard-00-01-ryd3a.mongodb.net:27017,etek01-shard-00-02-ryd3a.mongodb.net:27017/etek01?ssl=true&replicaSet=etek01-shard-0&authSource=admin';  
const dbString = config.db.endPoint;  
let itsConnected=false;
let api = Router();

mongoose.connect(dbString).then(() => {
  itsConnected=true;
}).catch(err =>{
  console.log(err);
});
  
api.get('*', (req, res, next)=>{
  if(!itsConnected) {
    return res.json({err:'Database are not connected'});
  }
  next();
}); 

api.get('/', function (req, res) {
  returnAllExpenses().then((data)=>{
      return res.json({ 
             status:'OK', 
             data:data
          });

  });
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
      status: dat
    })
  },
  (dat)=>{
    return res.json({
      err: dat
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
  let expense = new expensesModel({id:uuid.v1(), name:name, value:value},{_id:false});
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
