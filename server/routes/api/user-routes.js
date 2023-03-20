const router = require('express').Router();
const {User} = require("../../models")
const {signToken} = require("../../utils/auth")

const multer = require("multer");
const Aws = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

// creating the storage variable to upload the file and providing the destination folder,
// if nothing is provided in the callback it will get uploaded in main directory
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "");
  },
});

// below variable is define to check the type of file which is uploaded
const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// defining the upload variable for the configuration of photo being uploaded
const upload = multer({ storage: storage, fileFilter: filefilter });

// Now creating the S3 instance which will be used in uploading photo to S3 bucket
const s3 = new Aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

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
router.post('/create-user', upload.single("userImage"), async (req,res) => {
    let s3ImgLocation;
    try {
        if (req.file) {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME, // bucket name
            Key: req.file.originalname, // name of image
            Body: req.file.buffer, // body which will contain the image in buffer format
            ACL: "public-read", // defining the permissions to get public link
            ContentType: "image/jpeg", // necessary to define the image content-type to view photo in browswer with link
        };

        // uploading photo using s3 instance and saving link in database
        const data = await s3.upload(params).promise();

        // if not then below code will be executed

        //   console.log(data); // will give information about object in which photo is stored
        s3ImgLocation = data.Location;
        }
        // save info in database
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            userImage: s3ImgLocation
        });
        const token = signToken(user)
        res.status(200).json({user, token});
    } catch (err) {
        console.log(err); 
        res.status(500).send(err);
    }
    // try {
    //     const user = await User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     password: req.body.password
    //     })
    //     // res.status(200).json(user)
    //     const token = signToken(user);
    //     res.json({ token, user });
    // } catch (err) {
    //     console.log(err)
    //     res.send(err)
    // }
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