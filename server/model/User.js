const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
        max: 100,
        min:5
    },
    email:{
        type:String,
        required:true,
        max:200,
        min:8
    },
    password:{
        type:String,
        required:true,
        max:205,
        min:10
    },
    data:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)