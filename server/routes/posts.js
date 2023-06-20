import express from 'express';

import {getpost,createPost,updatePost,deletePost,likePost} from "../controllers/posts.js"
import auth from "../middleware/auth.js";

const Router=express.Router();

Router.get('/',getpost);
Router.post("/",auth,createPost);
Router.patch('/:id',auth,updatePost);
Router.delete('/:id',auth,deletePost);
Router.patch("/:id/likePost",auth,likePost);

export default Router;