const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.authToken; 

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "HJAHUEHJEJD");
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = authenticateToken;