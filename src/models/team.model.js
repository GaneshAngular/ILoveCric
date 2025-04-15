import { model, Schema } from 'mongoose'

const teamSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: "users" },
    name: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    players: [{ type: { player_id: { type: Schema.Types.ObjectId, ref: 'users' },role:{type:String},runs:{type:Number},wickets:{type:Number},highestScore:{type:Number} } }],
    matches:{type:Number},
    wons:{type:Number},
    loss:{type:Number},
    tie:{type:Number}
})

const teamModel = new model('Team', teamSchema)
export default teamModel;