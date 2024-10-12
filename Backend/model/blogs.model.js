const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    author : {
        type : String,
        default : 'Manpreet'
    },
    authorImg : {
        type : String,
        default : '/profile_icon.png'
    }
},{
    timestamps : true
})

const userBlogs = mongoose.model('blogs', userSchema);

module.exports = userBlogs;