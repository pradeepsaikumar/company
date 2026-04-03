import mongoose from 'mongoose'
const s = new mongoose.Schema({ name:{type:String,required:true,trim:true}, email:{type:String,required:true,trim:true,lowercase:true}, phone:{type:String,trim:true}, service:String, budget:String, message:{type:String,required:true}, read:{type:Boolean,default:false} }, {timestamps:true})
export default mongoose.model('Contact', s)
