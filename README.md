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
Maso menos lo hice, en realidad puedo refactorizarlo un poco y que quede mejor

2- flujo de datos
    usuario -> categoria -> expensas
    A - Crear usuario
    B - ABM Categorias
    C - ABM Expensas

Alta usuario User{ name, lastname, username, password, mail}
por cada creacion de x cosa, verificar que se envia el usuario y el mismo existe
Creacion de categorias
Creacion de Expensas
Enviar Mensaje
Ver mensajes
Agregar Validators
Agregar Unit test

> [Ayuda Memoria](https://fernetjs.com/2012/08/buenos-amigos-nodejs-mongodb/)
> [Otro](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)

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

