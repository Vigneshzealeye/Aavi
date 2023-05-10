var jwt = require("jsonwebtoken");


const tokenvalidator = async (req, res, next) => {
  
  

  if(!req.headers.authorization)
  {
    res.status(400).json({mesage:"Token Missing"})
  }
  else{
    var token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) {
      res.status(400).json({message:"invalid token"});
    }
    else{
      var email = decoded.email;

    try {
      req.email = email;
      
      next();
    } catch (error) {
      res.status(500).json({message:"something went wrong "});
    }
    }
    
  });}
};

module.exports = {
  tokenvalidator,
};
