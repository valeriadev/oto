const userService = require("../services/user.service");

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