import { Schema, model } from 'mongoose';

const playerSchema = new Schema({
  player_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, required: true }, 
}, { _id: false });

const teamSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  logo:{type:String},
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  players: [playerSchema],
  matches: { type: Number, default: 0 },
  wons: { type: Number, default: 0 },
  loss: { type: Number, default: 0 },
  tie: { type: Number, default: 0 },
  noResult:{type:Number,default:0}
}, {
  timestamps: true,
});

const TeamModel = model('Team', teamSchema);
export default TeamModel;
