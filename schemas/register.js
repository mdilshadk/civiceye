import mongoose from "mongoose";

let regschema=new mongoose.Schema({
    name:{
        type:String,
    },
    phonenumber:{
        type:Number,
        unique:true
    },
    dob:{
        type:Date,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String
    }
})
const register=mongoose.model("register",regschema);

export default register;