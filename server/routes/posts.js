import express from 'express';

import {getpost,createPost,updatePost,deletePost,likePost} from "../controllers/posts.js"
const Router=express.Router();

Router.get('/',getpost);
Router.post("/",createPost);
Router.patch('/:id',updatePost);
Router.delete('/:id',deletePost);
Router.patch("/:id/likePost",likePost);

export default Router;