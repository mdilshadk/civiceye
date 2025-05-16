import register from "../schemas/register.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import complaints from "../schemas/complaint.js";


const reg=async(req,res)=>{
    try{

        const {name ,phonenumber ,dob,email,password} = req.body;

        console.log(name ,email,password);
        

        const exemail=await register.findOne({email:email})
        if(exemail){
            return res.status(404).json("mail already exist");
        }

        const hashpassword=await bcrypt.hash(req.body.password,10);
        
        const regdata={...req.body,password:hashpassword}

        const newreg=await new register(regdata)
        const savereg=await newreg.save()
        return res.json(savereg)
    }
    catch(e){
        return res.status(500).json({message:'error occured during register'})

    }
}
const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        
        const user=await register.findOne({email:email})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        
        const pass=await bcrypt.compare(password,user.password)
        if(!pass){
            return res.status(404).json({message:"Invalid password"})

        }

        const token=jwt.sign(
            {
                userid:user._id,
                email:user.email
            },
            "abc",
            {expiresIn:"1h"}
        );
        return res.status(201).json({message:"Login successful",token:token,_id:user._id,usertype:user.usertype})
    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
}

const regcomplaint=async(req,res)=>{
    try{
        const{ description,complainttype,location,userId}=req.body;
        const file=req.file;

        if(!file){
            return res.status(400).json("file not uploaded")
        }

        const newcomp= new complaints({
            description,
            complainttype,
            location,
            proof:file.filename,
            userId,
        });
        const savedcomp=await newcomp.save();
        res.status(201).json({message:"complaint saved",savedcomp})
    }
     catch(error){
        res.status(500).json({message:"somthing error"})
    }
    
}

export{reg,login,regcomplaint}