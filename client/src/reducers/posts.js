//In this posts.js we will be creating a reducer for the combined reducer which takes state and action as  an 
//arguement and returns the state and action
//to create a reducer we and export it to combined reducer to index.js 
export default (posts=[], action)=>{
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts,action.payload];
        default:
            return posts;
    }
}