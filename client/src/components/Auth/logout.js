import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.clientId;
function Logout(){
    const onSucess=()=>{
        console.log("logout sucess");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSucess}
            />           
        </div>
    )
}

export default Logout;