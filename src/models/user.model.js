import {model, Schema} from 'mongoose'

const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    dob:{type:Date,required:true},
    mobile:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    specialization:{type:String,required:true},
    active:{type:Boolean,default:true}
})

const userModel=new model('User',userSchema)
export default userModel;