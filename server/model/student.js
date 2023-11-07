const mongoose=require('mongoose')
const placement = require('./placement')
const studentSchema= new mongoose.Schema({
    first_name:{
        type:String,
        trim:true,
        unique:true
    },
    last_name:{
        type:String,
        trim:true
    },
    age:{
        type:Number,

    },
    course:{
        type:String,
        trim:true
    },
    phone_number:{
        type:Number,
       
    },
    address:{
        type:String,
        trim:true,

    },
    gender:{
        type:String,
    },
   

    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    placement:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Placement'
    }
},{timestamps:true})
module.exports = mongoose.model('Student',studentSchema) 