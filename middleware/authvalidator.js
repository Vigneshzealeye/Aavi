var jwt = require("jsonwebtoken");


const tokenvalidator = async (req, res, next) => {
  var token = req.headers.authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) {
      res.status(400).json("invalid token");
    }
    else{
      var id = decoded.id;

    try {
      req.uid = id;
      next();
    } catch (error) {
      res.status(500).json(error || "something went wrong ");
    }
    }
    
  });
};

module.exports = {
  tokenvalidator,
};
