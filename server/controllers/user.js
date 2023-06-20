import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const jwttoken=process.env.JWT_TOKEN;
export const signin=async(req,res)=>{

    const {email,password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        
        if(!existingUser) return res.status(404).json({message:"user does not exist"});
        
        const isPassworCorrect = await bcrypt.compare(password,existingUser.password)
        
        if(!isPassworCorrect) return res.status(400).json({message:"Invalid password"})
        
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},jwttoken,{expiresIn:'1h'});
        
        res.status(200).json({result:existingUser,token});
    
    }catch(err){
        res.stauts(500).json({message:"something went wrong"});
    }
}

export const signup=async(req,res)=>{
    const {email,password,confirmPassword,firstName,lastName}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"user already exists"});
        if(password !== confirmPassword){
            return res.status(400).json({message:"password and confirm password does not match"})
        }
        const hashedPassword=await bcrypt.hash(password,12);
        const result=await User.create({email,password:hashedPassword,name:`${firstName}${lastName}`});
        const token=jwt.sign({email:result.email,id:result._id},jwttoken,{expiresIn:"1h"});
        res.status(200).json({result,token});
    }catch(err){
        res.status(500).json({message:"something went wrong"});
    }
}