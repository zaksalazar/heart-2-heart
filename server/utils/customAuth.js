
const withAuth = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers.authorization;
  if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
  }
  if (!token) {
    return res.status(401).json({message: "You have not received a token"})
}

if (token){
  try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration});
      next()
  } catch (err){
      console.log('Invalid token received', err);
      res.status(401).json({message: "You do not have a valid token"});
  }
}
}