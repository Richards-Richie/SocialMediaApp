import PostMessage from "../models/postmessage.js";
import express from "express";
import mongoose from "mongoose";

export const getpost=async (req,res)=>{
    try {
        const postmessage=await PostMessage.find();
        console.log(postmessage);
        res.status(200).json(postmessage);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const createPost=async (req,res)=>{
    const post=req.body;
    const newpost=new PostMessage(post);
    try {
        await newpost.save();
        res.status(201).json(newpost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
export const updatePost=async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that id");
    }
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatedPost);
}

export const deletePost=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that id");
    }
    await postMessage.findByIdAndRemove(id);
    res.json({message:"Post deleted successfully"});
}