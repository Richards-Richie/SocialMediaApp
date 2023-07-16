import React,{useState} from "react";
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core" 

import useStyles from "./styles.js";
import LockedOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input.js";
//import icon from "./Icon.js";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signin,signup} from "../../actions/auth.js";






const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};





const Auth=()=>{
    
    const clientId=process.env.CLIENT_ID;
    
    const history=useHistory();
    const dispatch=useDispatch();
    const classes=useStyles();
    const [formData,setFormData]=useState(initialState);
    const [isSignUp,setIsSignUp]=useState(false);
    const [prevIsSignUp,setPrevIsSignUp]=useState(isSignUp);
    
    const {showPassword,setShowPassword}=useState(false);

    
    const switchMode=()=>{
        //e.preventDefault();
        setFormData(initialState);
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
        //setIsSignUp(!isSignUp);
        setShowPassword(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignUp){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
        //console.log(formData);
    }
    const handleChange=(e)=>{
        
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleShowPassword=()=>setShowPassword(!showPassword);
    //prevShowPassword)=>!prevShowPassword
    // const onSucess= async (res)=>{
    //     const result=res?.profileObj;
    //     const token=res?.tokenId;
    //     try{
    //         dispatch({type:"AUTH",data:{result,token}});
    //         history.push('/');
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    

    
    return(
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockedOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">{isSignUp ? 'sign up' : 'sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing={2} >
                        { isSignUp && (
                                <>
                                <Input name="firstName" label="First Name" onChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" onChange={handleChange}  half />
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}  />  
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"    />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >    
                            {isSignUp ? "sign up" : "sign in"}
                    </Button>
                    {/* <Login className={classes.googleButton} fullWidth variant="contained" /> */}
                    {/* <GoogleLogin
                        onSuccess={onSucess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        cookiePolicy="single_host_origin"
                    />; */}
                    <Grid container justifyContent="flex-end" >
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
};

export default Auth;