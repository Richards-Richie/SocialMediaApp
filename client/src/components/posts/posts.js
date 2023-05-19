import React from "react";
import Post from "./post/post.js";
import useStyles from "./styles.js";
import {useSelector} from "react-redux";
const Posts=()=>{
    const classes=useStyles();  
    //since the state is stored in the redux store we need to retrieve it from there
    //using redux-selectors
    const posts=useSelector((state)=>state.posts);
    //const classes=useStyles();
    console.log(posts);
    return(
        <div >
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;