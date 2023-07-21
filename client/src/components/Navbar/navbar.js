import React,{useState,useEffect} from "react";
import {AppBar,Avatar,Button,Toolbar,Typography} from "@material-ui/core";    
import {Link} from "react-router-dom";
import useStyles from "./styles.js"
import memories from "../../images/logo192.png";    
import {useDispatch} from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes.js"


const Navbar=()=>{
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();
    useEffect(()=>{
        const token=user?.token;
        if(token){
            const decodedToken=decode(token);
            if(decodedToken.exp*1000 < new Date().getTime()) Logout();
            
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);

    const Logout=()=>{
        dispatch({type :actionType.LOGOUT});
        history.push("/");
        setUser(null);
    }
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer} >
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >
                    MemoGraph
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </div>
            <Toolbar className={classes.toolbar} position="static" >
                {user ? (
                    <div className={classes.profile} >
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} onClick={Logout} color="secondary" >Logout</Button>   
                    </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" color="primary" >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;