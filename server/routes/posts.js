import express from 'express';

import {getpost,createPost,updatePost,deletePost} from "../controllers/posts.js"
const Router=express.Router();

Router.get('/',getpost);
Router.post("/",createPost);
Router.patch('/:id',updatePost);
Router.delete('/:id',deletePost);
export default Router;