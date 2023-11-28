const mongoose = require('mongoose');


const mySchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter name']
    },
  
    password:{
        type:String,
        required:[true,'please enter password'],
        minlength:8
    }
    
    })

    exports.myModel = mongoose.model('user',mySchema);