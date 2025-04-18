
import MODELS from '../models/app.model.js';

const addTeams=async(req,reply)=>{
        const data=req.body;
        const isExist=await MODELS.teamModel.findOne({name:data.name})

        if(isExist) return reply.send({message:"Team Name Already Used"})
          
        await MODELS.teamModel.create(data)

        return reply.send({message:" Created Success !"})
            

}

const getTeams=async(req,reply)=>{
    const {search}=req.query

    const pattern=search?{$regx:{name:search}}:{}
   const teams= await MODELS.teamModel.find(pattern).populate('owner')

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