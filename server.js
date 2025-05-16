import express from 'express'
import { connectdb } from './database.js'
import dotenv from 'dotenv'
import auth from './rootes/roots.js'
import cors from 'cors'

dotenv.config()

const app = express();
app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use(express.json());

app.use('/auth',auth)
connectdb().then(()=>{
    app.listen(5000,()=>console.log("server running"))

})


export default app