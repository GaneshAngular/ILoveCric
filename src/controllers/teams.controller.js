
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
    const teams = await MODELS.teamModel.find(pattern).populate('owner').populate('players.player_id');
    

   return reply.send(teams)
}

const deleteTeams=async(req,reply)=>{
            const {id}=req.query
           if(!id)return reply.send({message:"Invalid data"})
         
            await MODELS.teamModel.deleteOne({_id:id})

            return reply.send({message:"Deleted Success!"})
}   

const updateTeams=async(req,reply)=>{
  try {
    const parts = await req.parts();
    const fields = {};
    let file;
    for await (const part of parts) {
        if (part.type === 'file' && part.fieldname === 'logo') {
            const buffer = await part.toBuffer();
            file = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({ folder: 'profiles' }, (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                }).end(buffer);
            });
            fields.logo = file.secure_url; // Assuming you want to store the URL
        } else if (part.type === 'field') {
            fields[part.fieldname] = part.value;
        }
    }

    if (fields.players) {
     
        try {
            const players = Array.isArray(fields.players) ? fields.players : JSON.parse(fields.players);
            const actualData = [];
            
            for (const player of players) {
                const exist = await MODELS.userModel.findOne({ email: player.email });
                if (exist) {
                    actualData.push({ player_id: exist._id, role: "player" });
                } else {
                    const user = await MODELS.userModel.create({ 
                        name: player.name, 
                        email: player.email 
                    });
                    actualData.push({ player_id: user._id, role: "player" });
                }
            }
            
            fields.players = actualData;
            fields['owner']=fields.owner._id
        } catch (e) {
            return reply.status(400).send({ message: "Invalid players data" });
        }
    }

    const newData = await MODELS.teamModel.findByIdAndUpdate(
        fields._id, 
        fields, 
        { new: true }
    );

    if (!newData) {
        return reply.status(404).send({ message: "Team not found" });
    }

    return reply.send({ 
        message: "Updated Successfully!", 
        team: newData 
    });
} catch (err) {
    console.error("Update error:", err);
    return reply.status(500).send({ message: "Server error during update" });
}
}



export default {addTeams,getTeams,deleteTeams,updateTeams}