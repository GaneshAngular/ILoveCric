import { model, Schema } from 'mongoose'

const matchSchema = new Schema({
    tournament:{type:Schema.Types.ObjectId,ref:'Tournament'},
    team1: { type: { id: { type: Schema.Types.ObjectId, ref: 'Teams' }, batsmans: [{ type: { id: { type: Schema.Types.ObjectId, ref: 'Users' }, runs: { type: Number }, balls: { type: Number } } }], bowlers: [{ type: { id: { type: Schema.Types.ObjectId, ref: 'Users' }, runs: { type: Number }, wickets: { type: Number }, balls: { type: Number } } }] } },
    team2: { type: { type: Schema.Types.ObjectId, ref: 'Teams' } },
    venue: { type: String, required: true },
    pom: { type: Schema.Types.ObjectId, ref: 'Users' },
    result: { type: { won: { type: Schema.Types.ObjectId, ref: 'Teams' }, loss: { type: Schema.Types.ObjectId, ref: 'Teams' }, result: { type: String }, batsmans: [{ type: { id: { type: Schema.Types.ObjectId, ref: 'Users' }, runs: { type: Number }, balls: { type: Number } } }], bowlers: [{ type: { id: { type: Schema.Types.ObjectId, ref: 'Users' }, runs: { type: Number }, wickets: { type: Number }, balls: { type: Number } } }] } }
})

const matchModel = new model('Match', matchSchema)
export default matchModel;