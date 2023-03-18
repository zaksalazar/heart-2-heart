const router = require("express").Router();
const { Supply } = require("../../models");

// dependencies needed for S3 storage of images
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

// handle post request and upload photo (upload photo using key defined below in upload.single id: supplyImage)
router.post("/upload", upload.single("supplyImage"), async (req, res) => {
//   console.log(req.file); // check data in console that is being uploaded
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
    const supply = await Supply.create({
      recipientId: req.body.recipientId,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      county: req.body.county,
      supplyImage: s3ImgLocation
    });
    res.status(200).json(supply);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// Route that creates a new supply
// POST http://localhost:3001/api/supplies/
// router.post("/", upload.single("supplyImage"), async (req, res) => {
//   console.log(req.file);
//   try {
//     const supply = await Supply.create({
//       recipientId: req.body.recipientId,
//       title: req.body.title,
//       description: req.body.description,
//       tags: req.body.tags,
//       county: req.body.county,
//     });

//     res.status(200).json(req.body);
//   } catch (err) {
//     console.log(err);
//     res.send(err);
//   }
// });

// Route that gets all supplies
// GET http://localhost:3001/api/supplies/
router.get("/", async (req, res) => {
  try {
    const supplies = await Supply.find({});
    res.status(200).json(supplies);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// Route that gets single supply
// GET http://localhost:3001/api/supplies/:supplyId
router.get("/:supplyId", async (req, res) => {
  try {
    const singleSupply = await Supply.findById(req.params.supplyId);
    res.status(200).json(singleSupply);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// Route that updates single supply
// PUT/POST http://localhost:3001/api/supplies/:supplyId
router.put("/:supplyId", async (req, res) => {
  try {
    const options = { new: true };
    const updatedSupply = await Supply.findByIdAndUpdate(
      req.params.supplyId,
      req.body,
      options
    );
    res.status(200).json(updatedSupply);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
