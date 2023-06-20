import React,{useState,useEffect} from "react";
import {Avatar,Button,Paper,Grid,Typography,Container, TextField} from "@material-ui/core" 
import Login from "./login.js";
import {gapi} from "gapi-script";
import useStyles from "./styles.js";
import LockedOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input.js";
import icon from "./Icon.js";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signin,signup} from "../../actions/auth.js";
import { GoogleLogin } from '@react-oauth/google';






const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};





const Auth=()=>{
    const clientId=process.env.CLIENT_ID;
    
    const history=useHistory();
    const dispatch=useDispatch();
    const classes=useStyles();
    const [formData,setFormData]=useState(initialState);
    const [isSignUp,setIsSignUp]=useState(true);

    const {showPassword,setShowPassword}=useState(true);
    const switchMode=()=>{
        
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
        setShowPassword(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
        console.log(formData);
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword);
    const onSucess= async (res)=>{
        const result=res?.profileObj;
        const token=res?.tokenId;
        try{
            dispatch({type:"AUTH",data:{result,token}});
            history.push('/');
        }catch(err){
            console.log(err);
        }
    }
    

    
    return(
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockedOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'sign up' : 'sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2} >
                        { isSignUp && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}  />
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >    
                            {isSignUp ? "sign up" : "sign in"}
                    </Button>
                    {/* <Login className={classes.googleButton} fullWidth variant="contained" /> */}
                    <GoogleLogin
                        onSuccess={onSucess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        cookiePolicy="single_host_origin"
                    />;
                    <Grid container justify="flex-end" >
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account? sign in" : "Don't have an account?  sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            
            </Paper>
        </Container>
    );
}

export default Auth;