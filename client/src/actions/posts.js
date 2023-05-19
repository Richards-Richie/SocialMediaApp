import * as api from "../api";

//now we will create action creators
//Action creators are functions that return actions
//we will use async await to fetch data from the backend
export const getPosts=()=>async(dispatch)=>{
    try{
        const {data} = await api.fetchPosts();
        dispatch({type:"FETCH_ALL",payload:data})
    }catch(err){
        console.log(err.message);
    }
}


export const createPost=(post)=>async(dispatch)=>{
    try{
        const {data}=await api.createPost(post);
        dispatch({type:"CREATE",payload:data});
    }catch(err){
        console.log(err);
    }
}