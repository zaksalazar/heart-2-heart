const jwt = require('jsonwebtoken');

const secret = "thisisasecret";
const expiration = '3h';

module.exports = {
    authMiddleware: function ({req}) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return res.status(400).json({message: "You have not received a token"})
        }
    
    if (token){
    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration});
        req.user = data;
    } catch (err){
        console.log('Invalid token received', err);
    }
        }
        return req
    },
    signToken: function (payload) {
        // const payload = { username, email, _id };
        console.log(payload);
        return jwt.sign({ data: payload}, secret, { expiresIn : expiration })
    }
}