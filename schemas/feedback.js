import mongoose from "mongoose";

const feedbak=new mongoose.Schema({
    feed:{
        type:String
    },
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:"register",
        required:true
    }
})
const feedback=mongoose.model("feedback",feedbak)

export default feedback