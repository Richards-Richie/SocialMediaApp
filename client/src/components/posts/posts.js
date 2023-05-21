import React from "react";
import Post from "./post/post.js";
import useStyles from "./styles.js";
import {Grid,CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
const Posts=({setCurrentId})=>{
    const classes=useStyles();  
    //since the state is stored in the redux store we need to retrieve it from there
    //using redux-selectors
    const posts=useSelector((state)=>state.posts);
    //const classes=useStyles();
    console.log(posts);
    return(
        !posts.length?<CircularProgress/>:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;