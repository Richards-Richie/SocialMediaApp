import React from "react";
import {GoogleLogin} from "react-google-login";

const clientId=process.env.CLIENT_ID;

function Login(){

    const onSucess=async (res)=>{
        console.log("login sucess"+res);
    }
    const onFailure=async (res)=>{
        console.log(res);
    }
    return(
        <div id="signInButton">
            <GoogleLogin
                client_id={clientId} 
                buttonText="Login"
                onSucess={onSucess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"} 
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;