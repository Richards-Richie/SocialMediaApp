import React from "react";
import {Container} from "@material-ui/core";
import NavBar from "./components/Navbar/navbar.js";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import home from "./components/Home/home.js";
import Auth from "./components/Auth/Auth.js";
import { GoogleOAuthProvider } from '@react-oauth/google';


const App=()=>{
    return (
        //<GoogleOAuthProvider clientId="88928863719-ho9leld2qbjj7fc6e6khiej4vbvvn122.apps.googleusercontent.com" >
            <BrowserRouter>
                <Container maxwidth="lg">
                    <NavBar/>
                    <Switch>
                        <Route path="/" exact component={home} />
                        <Route path="/auth" exact component={Auth} />
                    </Switch>
                </Container>
            </BrowserRouter>
        //</GoogleOAuthProvider>
        
    )
}

export default App;