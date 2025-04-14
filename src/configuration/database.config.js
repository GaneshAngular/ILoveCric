import mongoose from "mongoose";

const connectDataBase=async()=>{
    const status=await mongoose.connect(process.env.DATABASE_URL||'')
    if(status){
        console.log("Database connection success")
    }else{
        console.log("Something error")
    }
}

export default connectDataBase;