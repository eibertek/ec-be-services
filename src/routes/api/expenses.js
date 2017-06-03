import { Router} from 'express';

let api = Router();

api.get('/', function (req, res) {
  return res.json({status:'OK', types:'expenses control'});
});

api.get('/new', function (req, res) {
  console.log('expenses_new');
  return res.json({status:'OK', types:'expenses control'});
});

export default api;