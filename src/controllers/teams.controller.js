
import cloudinary from '../configuration/multer-cloudinary.config.js';
import MODELS from '../models/app.model.js';

const addTeams=async(req,reply)=>{
    const fields={}
        let file;
    const user=req.user
    const parts = req.parts();

    for await (const part of parts) {
      if (part.type === 'file' && part.fieldname === 'profile') {
        const buffer = await part.toBuffer();
  
        // Upload file to Cloudinary
        file = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: 'profiles' }, (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }).end(buffer);
        });
      } else if (part.type === 'field') {
        fields[part.fieldname] = part.value;
      }
    }
    const isExist=await MODELS.teamModel.findOne({name:fields.name})

    if(isExist) return reply.send({message:"Team Name Already Used"})

         
         fields['owner']=user.id
        
         console.log(fields)
          
            fields.logo=file.secure_url;
        await MODELS.teamModel.create(fields)

        return reply.send({message:" Created Success !"})
            

}

const getTeams=async(req,reply)=>{
    const {search}=req.query

    const pattern = search ? { name: { $regex: search, $options: 'i' } } : {};
    const teams = await MODELS.teamModel.find(pattern).populate('owner');
    

   return reply.send(teams)
}

const deleteTeams=async(req,reply)=>{
            const {id}=req.query
           if(!id)return reply.send({message:"Invalid data"})
         
            await MODELS.teamModel.deleteOne({_id:id})

            return reply.send({message:"Deleted Success!"})
}   

const updateTeams=async(req,reply)=>{
        const {id}=req.query
        const data=req.body

        const newData=await MODELS.teamModel.findByIdAndUpdate(id,data,{new:true})

    return reply.send({message:"Updated Success!",data:newData})
}



export default {addTeams,getTeams,deleteTeams,updateTeams}