import mongoose from "mongoose";
import 'dotenv/config'

const DB_URL=process.env.url

export async function connectdb(){
    try{
        await mongoose.connect(DB_URL)
        console.log("Mongodb connected");
        
    }
    catch(error){
        console.log(error.message);
        
    }
}