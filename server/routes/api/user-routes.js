const router = require('express').Router();
const {User} = require("../../models")
const {signToken} = require("../../utils/auth")

// Route that logs in
// POST http://localhost:3001/api/users/login
router.post('/login', async ( {body}, res ) => {
    const user = await User.findOne({  username: body.username  });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    // res.json(user)
    const token = signToken(user);
    res.json({ token, user });
})

// Route that creates new user
// POST http://localhost:3001/api/users/create-user
router.post('/create-user', async (req,res) => {
    try {
        const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
        })
        // res.status(200).json(user)
        const token = signToken(user);
        res.json({ token, user });
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that gets all the users
// GET http://localhost:3001/api/users/
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that gets single user based on user id
// GET http://localhost:3001/api/users/:userId
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


// Route that updates single user based on user id
// PUT/POST http://localhost:3001/api/users/:userId
router.put('/:userId', async (req, res) => {
    try {
        const options = {new: true}
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, options)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


// Route that deletes single user based on user id

module.exports = router;