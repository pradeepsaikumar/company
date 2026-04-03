import mongoose from 'mongoose'
const s = new mongoose.Schema({ title:{type:String,required:true,trim:true}, slug:{type:String,required:true,unique:true}, excerpt:{type:String,trim:true}, content:{type:String,required:true}, category:{type:String,default:'General'}, author:{type:String,default:'DeepRapIT Team'}, color:{type:String,default:'var(--neon)'}, readTime:{type:String,default:'3 min read'}, published:{type:Boolean,default:true}, date:{type:Date,default:Date.now} }, {timestamps:true})
export default mongoose.model('Blog', s)
