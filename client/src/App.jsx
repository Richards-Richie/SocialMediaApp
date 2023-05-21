import React,{useState,useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import NavBar from "./components/Navbar/navbar.js";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import home from "./components/Home/home.js";
import Auth from "./components/Auth/Auth.js";

const App=()=>{
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
                
            </Container>
        </BrowserRouter>
        
    )
}

export default App;