import express from 'express';

import {getpost,createPost} from "../controllers/posts.js"
const Router=express.Router();

Router.get('/',getpost);
Router.post("/",createPost);

export default Router;