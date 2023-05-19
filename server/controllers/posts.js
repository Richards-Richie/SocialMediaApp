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