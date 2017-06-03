import { Router} from 'express';

let api = Router();

api.all('/api/*', function (req, res, next) {
  if(req.headers.authorization === 'marianoeibermanesgenial')
  {
       return next();
  }    
  //console.log('authentification denied', req.headers);
  return res.status(404).send('<h1>Authorization Error</h1><br /> <h2>:(</h2>');
});

export default api;
