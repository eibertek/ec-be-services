import { Router} from 'express';

let api = Router();

api.get('/', function (req, res) {
  res.json({status:'OK', types:'categories in expenses control'});
});

export default api;