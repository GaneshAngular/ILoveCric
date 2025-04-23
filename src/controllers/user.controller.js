
import cloudinary from '../configuration/multer-cloudinary.config.js';
import MODELS from '../models/app.model.js';

const getProfile=async(req,reply)=>{
   const user=req.user
     const userData=await MODELS.userModel.findOne({_id:user.id})
     return reply.send(userData)
}

const getUsers=async(req , reply)=>{

}

const updateProfileImage=async(req,reply)=>{
       const file=await req.file()
       const user=req.user
        const buffer=await file.toBuffer()

        const storedFile=await new Promise((resolve, reject) => {
                  cloudinary.uploader.upload_stream({ folder: 'profiles' }, (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                  }).end(buffer);
                });
             
         const newData=await MODELS.userModel.findByIdAndUpdate(user.id,{profile:storedFile.secure_url},{new:true})   
       
        return reply.send({message:"Profile Image Updated",data:newData}) 
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
    updateProfile,
    updateProfileImage
}
export default userController