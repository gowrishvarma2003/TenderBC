const jwt = require('jsonwebtoken');

const requireauth = (req, res, next) => {
    console.log("Inside requireauth");
    const token = req.query.token || req.headers.authorization;
    
    if (!token) {
      console.log('No token');
      return res.status(401).send('No token provided');
    }
  
    jwt.verify(token, 'aliysdflua5aklsuygdc18525asy325j45', (err, decodedtoken) => {
      if (err) {
        console.log(err.message);
        return res.status(400).send('Invalid token');
      } else {
        // console.log(decodedtoken);
        req.email = decodedtoken.email;
        next(); // Call next() to proceed to the next middleware or route handler
      }
    });
  };

module.exports = {requireauth};