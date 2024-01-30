require('dotenv').config()
const jwt = require('jsonwebtoken')
const Subscribers = require('../models/subscribers.models')

const protect = async (req, res, next) => {
     try {
          // Would like to propose that you do this perhaps soon:
          // const token = req.headers.authorization.replace("Bearer", "")
          // So the token can be utilized automatically
          const token = req.query.token;
          /*
          const tokenPart = tokenAll.split(' ')
          const token = tokenPart[1]
          */
          //  return error if there is no token
          if (!token) {
               return (res.status(401).json({message: "Unauthorized!"}))
          }

          //  verify token if there is token
          let decoded;

          jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
               if (err) {
                    return err
               }

               decoded = decode;
          });

          if (decoded) {
               const user = await Subscribers.findById(decoded);

               if (user) {
                    req.user = user;

                    next();
               } else {
                res.status(401).json({message: "Unauthorized Here!"})
               }
          }
          else{
            res.status(401).json({message: "Fuck!"})
          }
     } catch (err) {
          res.status(500).json({message: err.message})
     }
};

module.exports = protect