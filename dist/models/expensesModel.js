'use strict';

/** expenses.js **/

var Expenses = function Expenses(data) {
    this.data = data;
};

Eexpenses.prototype.data = {};

Expenses.prototype.changeName = function (name) {
    this.data.name = name;
};

Expenses.findById = function (id, callback) {
    db.get('expenses', { id: id }).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Expenses(data));
    });
};

module.exports = Expenses;
//# sourceMappingURL=expensesModel.js.map