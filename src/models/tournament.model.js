import { model, Schema } from 'mongoose';

const tournamentSchema = new Schema({
    owner:{type:Schema.Types.ObjectId,ref:'User'},
    name: { type: String, required: true },
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team', required: true }],
    won: { type: Schema.Types.ObjectId, ref: 'Team' }, // Tournament winner
    playerOfTournament: { type: Schema.Types.ObjectId, ref: 'User' },
    bestBatsman: { type: Schema.Types.ObjectId, ref: 'User' },
    bestBowler: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type:  String }
}, {
    timestamps: true,
});

const TournamentModel = model('Tournament', tournamentSchema);
export default TournamentModel;
