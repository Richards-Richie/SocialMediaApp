import { FETCH_ALL,CREATE,DELETE,UPDATE } from "../constants/actionTypes.js";
import * as api from "../api";
//now we will create action creators
//Action creators are functions that return actions
//we will use async await to fetch data from the backend
export const getPosts=()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchPosts();
        dispatch({type:FETCH_ALL,payload:data})
    }catch(err){
        console.log(err.message);
    }
}


export const createPost=(post)=>async(dispatch)=>{
    try{
        const {data}=await api.createPost(post);
        dispatch({type:CREATE,payload:data});
    }catch(err){
        console.log(err);
    }
}

export const updatePost=(id,post)=>async(dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data});
    }catch(error){
        console.log(error);
    }
}

export const deletePost=(id)=> async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id});
    }catch(err){
        console.log(err);
    }
}

export const likePost=(id) =>async (dispatch)=>{
    try{
        await api.likePost(id);
        dispatch({type:UPDATE,payload:id});
    }catch(err){
        console.log(err);
    }
}
