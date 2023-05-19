import express from "express";
import bp from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postroutes from "./routes/posts.js"



const app=express();

app.use(bp.json({limit:"30mb",extended:true}));
app.use(bp.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postroutes);
const port=process.env.PORT || 55555;
mongoose.set('strictQuery',false);


mongoose
.connect('mongodb+srv://danderichards360:SocialMediaApp@socialmediaapp.20eb8rf.mongodb.net/SocialMediaApp',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected sucessfully");
    Listen();
})
.catch((err)=>{
    console.log(err.message);
});
// mongoose.set('useFindAndModify',false);    



function Listen(){
    app.listen(port,()=>{
        console.log("connected sucessfully to "+port);
    })
}