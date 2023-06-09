import mongoose from "mongoose";

const schema=mongoose.Schema({
    title:String,
    message:String,
    name:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likes:{
        type:[String],
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
});

const postMessage=mongoose.model("postMessage",schema);

export default postMessage;