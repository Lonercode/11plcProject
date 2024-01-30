const express = require('express')
const router = express.Router()
const middle = require('../middleware/subscribe.middleware')
const {
    subscriberController,
    confirmController
 } = require('../controllers/subscribers.controllers')

router.post('/subscribe', subscriberController)
router.get('/confirm', middle, confirmController)


module.exports = router