import React,{useState,useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import memories from "./images/logo192.png";
import Posts from "./components/posts/posts.js";
import Form from "./components/form/form.js";
import useStyles from "./styles.js";
import {getPosts} from "./actions/posts.js";
//import {useDispatch} from "react-redux"; hook to get the dispatch function
import {useDispatch} from "react-redux";

const App=()=>{
    const [currentId,setCurrentId]=useState(null);  
    const classes =useStyles();
    //to use the dispatch we need to create a variable and assign it to useDispatch()
    const dispatch=useDispatch(); 
    //we will use useEffect to dispatch the action,which takes 2 arguements a callback function and an array
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" >
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid containerjustify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;