/** users.js **/
import mongoose from 'mongoose';
export const status = {
    ONBOARD: 'ONBOARD',
    ACTIVE: 'ACTIVE',
    BANNED: 'BANNED',
    DISABLED: 'DISABLED'
}
class users extends mongoose.Schema 
{
    constructor() {
         super({
            id: { type:String, required:true, unique:true},
            userName: { type:String, required:true, unique:true},
            password: { type:String, required:true},
            name: String,
            lastName: String,
            email: String,
            status:String
         });
        }

        validateUserStatus(){
            return 'Status is on';
        }
}

export default mongoose.model('users', new users());