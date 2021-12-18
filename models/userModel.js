const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    apiKey : mongoose.Types.ObjectId,
email : String,
uid : String,
formFills : []


});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;