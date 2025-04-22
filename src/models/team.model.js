import { Schema, model } from 'mongoose';

const playerSchema = new Schema({
  player_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, required: true }, 
}, { _id: false });

const teamSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  logo:{type:String,default:"https://www.shutterstock.com/shutterstock/photos/270996839/display_1500/stock-vector-modern-professional-vector-dream-team-logo-for-a-basketball-team-270996839.jpg"},
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  players: [playerSchema],
  matches: { type: Number, default: 0 },
  wons: { type: Number, default: 0 },
  year:{type:Number},
  loss: { type: Number, default: 0 },
  tie: { type: Number, default: 0 },
  noResult:{type:Number,default:0}
}, {
  timestamps: true,
});

const TeamModel = model('Team', teamSchema);
export default TeamModel;
