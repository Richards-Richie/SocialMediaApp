//import combine reducers from redux
//there are differnt types of reducers
//1.slice reducer
//2.feature reducer
//3.async reducer
//4.ui reducer
//5.error reducer
//with differnt types of reducers we it will be difficult to manage the reducers seperately
//so we use combineReducers to combine all the reducers into one
import {combineReducers} from "redux";
import posts from "./posts.js";

//since this is reducer that will be used in the app(index.js) we need to export it
export const reducers= combineReducers({
    posts,
});
//now we need to import posts from reducers/posts.js