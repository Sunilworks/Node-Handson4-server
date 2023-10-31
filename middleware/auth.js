const jwt = require("jsonwebtoken")
const auth = (req,res,next) =>{
    const BearerToken = req.headers["authorization"]
    if(BearerToken){
    const token=BearerToken.split(" ")[1] //we will split our bearer token

    jwt.verify(token,secret_key);
    if(validate){
        next();
    }
    return res.send({msg:"user not authorized"})
    }
  return res.send({msg:"User not allowed "})
    // console.log(token) 
    
};

module.exports = auth;