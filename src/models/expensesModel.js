/** expenses.js **/
import mongoose from 'mongoose';

class expenses extends mongoose.Schema 
{
    constructor() {
        super({
            id: { type:String, required:true, unique:true},
            name: { type:String, required:true, unique:true},
            description: String,
            currency: String,
            value: Number,
            created_at:Date,
            updated_at:Date,
            categoryId: String,
            userId: String
        });
    }
}

export default mongoose.model('expenses', new expenses());