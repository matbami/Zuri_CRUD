const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
     name:{
         type: String,
         required: [true, "Please provide a username"]
     },

     email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true
       
    },

    country:{
        type: String,
        required: [true, "Please provide a country"],
      
       
    },

    password:{
        type: String,
        required:[true, " please add a password"],
        minlength:6,
        select: false
    },


   


},{
    timestamps: true
})

const User = mongoose.model("User", UserSchema)



module.exports = User