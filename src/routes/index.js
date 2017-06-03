import expenses from './api/expenses';
import categories from './api/categories';

import { Router} from 'express';

let api = Router();
api.use('/expenses', expenses);
api.use('/categories', categories);

export default api;





