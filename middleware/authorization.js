const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const ValidateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
    // console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        //  console.log(err);
        res.status(401);
        throw new Error("Unauthorized: Invalid token");
      }

      req.user = decoded; // Store decoded data (like id, username) for later use
     
      next();
    });
  } else {
    res.status(401);
    throw new Error("Unauthorized: No token provided");
  }
});

module.exports = ValidateToken;
