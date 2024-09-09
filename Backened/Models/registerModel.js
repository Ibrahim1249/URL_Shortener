
const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
     uuid : {
        type: String,
        unique: true
     },
     username : {
        type : String,
        required : true,
        unique : true
     },
     email : {
        type : String ,
        required : true,
     },
     password :{
        type : String ,
        required : true,
     }
})

const registerModel = mongoose.model("userRegister", registerSchema);

module.exports = registerModel;