const router = require('express').Router();
const userRoutes = require('./user-routes');
const supplyRoutes = require('./supplies-routes');

router.use('/users', userRoutes)
router.use('/supplies', supplyRoutes)

module.exports = router;