import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: '111'
    },
    status: {
        type: String
    }
})

const user = mongoose.model('user', userSchema);

export default user;