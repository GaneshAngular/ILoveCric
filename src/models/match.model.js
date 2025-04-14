import {model, Schema} from 'mongoose'

const matchSchema=new Schema({

})

const matchModel=new model('Match',matchSchema)
export default matchModel;