
const admin = require('firebase-admin');
var config = require("../keys/firebase-config.json");


  const adminApp = admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: "https://otoproject-1551103792513.firebaseio.com"
  });

  module.exports = {
    auth: async function (req, res, next) {
        if(!req.headers.authorization){
            return res.sendStatus(401);
        }
     try{
         
        var verification = await adminApp.auth().verifyIdToken(req.headers.authorization)
        if (verification !== null) {
            const user = await adminApp.auth().getUser(verification.uid)
            req.user = user;
            next();
          } else {
            res.sendStatus(401);
          }
     } catch (err) {
        console.error('Failed to auth user ' + err);
        res.sendStatus(500);
    }
   
    }
}
    







/*const userService = require("../services/user.service");

async function auth(req, res, next) {
    if (req.headers['x-oto-token']) {
        try {
            const user = await userService.validateToken(req.headers['x-oto-token'])
            if (user) {
                req.user = user;
                next();
            } else {
                res.sendStatus(401);
            }
        } catch (err) {
            console.error('Failed to auth user ' + err);
            res.sendStatus(500);
        }

    } else {
        res.sendStatus(401);
    }
}

module.exports = {
    auth
}
*/