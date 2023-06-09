import React,{useState,useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import Posts from "../posts/posts.js";
import Form from "../form/form.js";
import useStyles from "../../styles.js";
import {getPosts} from "../../actions/posts.js";
import {useDispatch} from "react-redux";


const Home=()=>{
    const [currentId,setCurrentId]=useState(null);  
    const classes =useStyles();
    const dispatch=useDispatch(); 
    
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])
    return (
        <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container  justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home;