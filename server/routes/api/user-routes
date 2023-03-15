const router = require('express').Router();
const {User} = require("../../models")

// Route that logs in
router.post('/login', async ( {body}, res ) => {
    const user = await User.findOne({  username: body.username  });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    res.json(user)
    // const token = signToken(user);
    // res.json({ token, user });
})


// Route that gets all the users
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
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that creates new user
router.post('/', async (req,res) => {
    try {
        const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
        })
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that updates single user based on user id
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