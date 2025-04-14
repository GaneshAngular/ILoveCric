import userModel from "../models/user.model.js"
import SERVICES from "../services/app.service.js"

const login=async(req ,reply)=>{
        const {email,password}=req.body
        const user=await userModel.findOne({email})
        if(!user) return reply.code(401).send({message:"Account Not Found"})
          
            // const hash= await SERVICES.BCRYPT.getHashPassWord(password)
            const isMatch = await SERVICES.BCRYPT.compareHash(password, user.password);
            if (!isMatch) {
              return reply.code(400).send({ message: "Invalid Credentials" });
            }
            
            const token=SERVICES.JWT.generateToken({email,id:user._id})
       
        return reply.send({message:"Login Success!",token})    
                
}

const signup=async(req ,reply)=>{
    const user=req.body
    user.password=await SERVICES.BCRYPT.getHashPassWord(user.password)
         const existData=await userModel.findOne({$or:[{email:user.email},{mobile:user.mobile}]})
         if(existData) return reply.send({message:"Details Already Exist"})
  
         const newUser=await userModel.create(user)
        
        return reply.send({message:"Signup Success!",data:newUser}) 
}

const forgotPassword=async(req , reply)=>{
       
}

export default {login,signup,forgotPassword}
