import { Schema, model } from "mongoose";

const matchSchema = new Schema({
  tournament: { type: Schema.Types.ObjectId, ref: "Tournament", required: true },
  team1: {
    id: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    score: {
      runs: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
    },
    batsmans: [
      {
        id: { type: Schema.Types.ObjectId, ref: "User" },
        runs: { type: Number, default: 0 },
        balls: { type: Number, default: 0 },
      },
    ],
    bowlers: [
      {
        id: { type: Schema.Types.ObjectId, ref: "User" },
        runs: { type: Number, default: 0 },
        wickets: { type: Number, default: 0 },
        balls: { type: Number, default: 0 },
      },
    ],
    balls: [
      {
        run: { type: Number, default: 0 },
        ballType: { type: String, default: "normal" }, // e.g. normal, wide, no-ball
      },
    ],
  },
  team2: {
    id: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    score: {
      runs: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
    },
    batsmans: [
      {
        id: { type: Schema.Types.ObjectId, ref: "User" },
        runs: { type: Number, default: 0 },
        balls: { type: Number, default: 0 },
      },
    ],
    bowlers: [
      {
        id: { type: Schema.Types.ObjectId, ref: "User" },
        runs: { type: Number, default: 0 },
        wickets: { type: Number, default: 0 },
        balls: { type: Number, default: 0 },
      },
    ],
    balls: [
      {
        run: { type: Number, default: 0 },
        ballType: { type: String, default: "normal" },
      },
    ],
  },
  overs: { type: Number, required: true },
  venue: { type: String, required: true },
  pom: { type: Schema.Types.ObjectId, ref: "Users" }, // Player of the match
  result: {
    won: { type: Schema.Types.ObjectId, ref: "Teams" },
    loss: { type: Schema.Types.ObjectId, ref: "Teams" },
    result: { type: String }, // e.g. "Team1 won by 20 runs"
  },
}, {
  timestamps: true,
});

const MatchModel = model("Match", matchSchema);
export default MatchModel;
