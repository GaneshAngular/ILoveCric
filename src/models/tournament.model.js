import {model, Schema} from 'mongoose'

const tournamentSchema=new Schema({

})

const tournamentModel=new model('Tournament',tournamentSchema)
export default tournamentModel;