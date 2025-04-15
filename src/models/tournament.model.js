import {model, Schema} from 'mongoose'

const tournamentSchema=new Schema({
          name:{type:String},
          teams:[{type:Schema.Types.ObjectId,ref:'Teams'}],
          won:{type:Schema.Types.ObjectId,ref:'Teams'},
          pot:{type:Schema.Types.ObjectId,ref:'Users'},
          bat_ot:{type:Schema.Types.ObjectId,ref:'Users'},
          bow_ot:{type:Schema.Types.ObjectId,ref:'Users'}
})

const tournamentModel=new model('Tournament',tournamentSchema)
export default tournamentModel;