import { Router} from 'express';

let api = Router();

api.get('/list', function (req, res, next) {
  return res.json({ 
             status:'OK', 
             services:[
                   { name:'expenses', url:'/api/expenses'},
                   { name:'categories', url:'/api/categories'}
                   ]
                }
             );
});

export default api;