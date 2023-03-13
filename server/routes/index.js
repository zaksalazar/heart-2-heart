const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res)=> {
    res.sendFIle(path.join(__dirname, '../../client/dist/index.html'))
})

module.exports = router;