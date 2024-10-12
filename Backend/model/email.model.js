const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

const userEmail = mongoose.model('emails',userSchema);

module.exports = userEmail;