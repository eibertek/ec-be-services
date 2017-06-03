# **Expenses Control**

## Version 0.3
---
#### checklist 
 **_Done_**
- Authorization key required
- Middleware: 
  - Authorization Middleware
  - Validation Middleware

**TO DO**            

1- Crear un modulo conector que permita conectar con la base

> [Ayuda Memoria](https://fernetjs.com/2012/08/buenos-amigos-nodejs-mongodb/)
> [Otro](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)

```Javascript
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/myappdatabase');

    // MODEL 
    // grab the things we need
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    // create a schema
    var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
    });

    // the schema is useless so far
    // we need to create a model using it
    var User = mongoose.model('User', userSchema);

    // make this available to our users in our Node applications
    module.exports = User;  
```


2- Nuevos expenses: Se debe crear el controller de expenses que permita crear un nuevo *expenses*, usando el modelo *expensesModel*. Validar los datos y agregar a la base de datos.


- GET /api/expenses
  > Get all expenses data and bring to json
- PUT /api/expenses/
  >  add New expenses
- POST /api/expenses/edit
  >  edit expenses
- DELETE /api/expenses/id
  >  delete expenses

- GET /api/categories
- PUT /api/categories/new
- POST /api/categories/edit
- DELETE /api/categories/delete

- GET /api/dashboard/id
- PUT /api/dashboard/new
- DELETE /api/dashboard/delete

- GET /api/messages/unread/userId
- GET /api/messages/history/userId
- GET /api/messages/message/id
- PUT /api/messages/send/
- DELETE /api/messages/delete


expenses model
    id
    name
    description
    currency
    value
    date_created
    date_updated
    categoryId
    userId

categories
    id
    name
    description
    userId

dashboard
    id
    name
    categories
    dateFrom
    dateUntil
    userId

messages
    id
    msgContent
    userId
    delivered
    hadRead

