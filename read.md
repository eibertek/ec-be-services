Expenses Control Server

Services list:

Authorization key required

Middleware: Authorization Middleware
            Validation Middleware
            
GET /api/expenses
    Get all expenses data and bring to json
PUT /api/expenses/
    add New expenses
POST /api/expenses/edit
    edit expenses
DELETE /api/expenses/id
    delete expenses

GET /api/categories
PUT /api/categories/new
POST /api/categories/edit
DELETE /api/categories/delete

GET /api/dashboard/id
PUT /api/dashboard/new
DELETE /api/dashboard/delete

GET /api/messages/unread/userId
GET /api/messages/history/userId
GET /api/messages/message/id
PUT /api/messages/send/
DELETE /api/messages/delete


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

