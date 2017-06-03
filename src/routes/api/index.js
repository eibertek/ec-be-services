import expenses from './expenses';
import categories from './categories';

import { Router} from 'express';

let api = Router();

api.use('/expenses',expenses);
api.use('/categories',categories);

export default api;
