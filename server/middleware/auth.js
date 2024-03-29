import jwt from "jsonwebtoken";


const auth=async (req,res,next)=>{
    try{
        
        const token=req.headers.authorization.split(' ')[1];
        const isCustomAuth=token.length < 500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData=jwt.verify(token,process.env.JWT_TOKEN);
            req.userId=decodedData?id:null;
        }else{
            decodedData=jwt.decode(token);
            req.userId=decodedData?.sub;
        
        }
        next();

    
    }catch(err){
        console.log(err);
    }
}

export default auth;