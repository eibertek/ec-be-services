'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** expenses.js **/


var expenses = function (_mongoose$Schema) {
    _inherits(expenses, _mongoose$Schema);

    function expenses() {
        _classCallCheck(this, expenses);

        return _possibleConstructorReturn(this, (expenses.__proto__ || Object.getPrototypeOf(expenses)).call(this, {
            id: { type: String, required: true, unique: true },
            name: { type: String, required: true, unique: true },
            description: String,
            currency: String,
            value: Number,
            created_at: Date,
            updated_at: Date,
            categoryId: String,
            userId: String
        }));
    }

    return expenses;
}(_mongoose2.default.Schema);

exports.default = _mongoose2.default.model('expenses', new expenses());
//# sourceMappingURL=expensesModel.js.map