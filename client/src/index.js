import React from "react";
import reactDom from "react-dom";
import App from "./App";
import {Provider} from "react-redux"; 
import {createStore,applyMiddleware,compose} from "redux";
//import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk";

//import the reducers from "./reducers";
import {reducers} from "./reducers";

//create a store which is supposed to store all the data required by the app and it should take a reducers
//compose function as an arguement which has applymiddleware as an arguement which has thunk as an arguement
const storestate=createStore(reducers,compose(applyMiddleware(thunk)));
reactDom.render(
<Provider store={storestate} >
    <App/>
</Provider>,document.getElementById('root'));