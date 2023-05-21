import React from "react";
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core" 
import useStyles from "./styles.js";
import LockedOutlinedIcon from "@material-ui/icons/LockOutlined";


const Auth=()=>{
    const classes=useStyles();
    const issignup=false;

    return(
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockedOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{issignup?'sign up' : 'sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2} >
                        
                    </Grid>
                </form>
            
            </Paper>
        </Container>
    );
}

export default Auth;