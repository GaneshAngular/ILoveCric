
import MODELS from '../models/app.model.js';

const getProfile=async(req,reply)=>{
   const user=req.user
     const userData=await MODELS.userModel.findOne({_id:user.id})
     return reply.send(userData)
}

const getUsers=async(req , reply)=>{

}

const updateProfile=async(req,reply)=>{
       const user=req.user
       const data=req.body
       console.log(data)
       const newData=await MODELS.userModel.findByIdAndUpdate(user.id,data,{new:true})
          
        return reply.send({message:"Profile Updated..",data:newData})
}
const userController={
    getProfile,
    getUsers,
    updateProfile
}
export default userController