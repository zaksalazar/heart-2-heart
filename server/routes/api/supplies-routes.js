const router = require('express').Router();
const {Supply} = require("../../models")

// Route that gets all supplies
router.get('/', async (req, res) => {
    try {
        const supplies = await Supply.find({})
        res.status(200).json(supplies)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that gets single supply
router.get('/:supplyId', async (req, res) => {
    try {
        const singleSupply = await Supply.findById(req.params.supplyId)
        res.status(200).json(singleSupply)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that creates a new supply
router.post('/', async (req, res) => {
    try {
        const supply = await Supply.create({
            recipientId: req.body.recipientId,
            fulfilled: req.body.fulfilled,
            items: req.body.items,
            description: req.body.description
        })
        res.status(200).json(supply)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// Route that updates single supply
router.put('/:supplyId', async (req, res) => {
    try {
        const options = { new: true }
        const updatedSupply = await Supply.findByIdAndUpdate(req.params.supplyId, req.body, options)
        res.status(200).json(updatedSupply)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router;