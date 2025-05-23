import jwt from 'jsonwebtoken'

const verifytoken=(req,res,next)=>{
    try{
        const authheader=req.headers.authorization;

        if(!authheader){
            return res.status(401).json({message:"authorization token is missing"})
        }

        const token=authheader.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"token not found in authorization header"})
        }

        const decoded=jwt.verify(token,"abc");
        req.user=decoded;
        console.log("decoded token data",decoded);
        next();
        
    }
    catch(e){
        res.status(401).json({ message: "Invalid or expired token", error: e.message });
        console.log("Token verification failed:", e.message);
    }
}
export default verifytoken;