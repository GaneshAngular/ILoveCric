
import MODELS from '../models/app.model.js';

const getProfile=async(req,reply)=>{
   const user=req.user
     const userData=await MODELS.userModel.findOne({_id:user.id})
     return reply.send(userData)
}

const getUsers=async(req , reply)=>{

}
const userController={
    getProfile,
    getUsers
}
export default userController