import express from "express";
import bp from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postroutes from "./routes/posts.js"
import dotenv from "dotenv";


const app=express();
dotenv.config();

app.use(bp.json({limit:"30mb",extended:true}));
app.use(bp.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postroutes);
const port=process.env.PORT || 55555;
mongoose.set('strictQuery',false);


mongoose
.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
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