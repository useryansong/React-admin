const fs = require('fs')
const express = require('express')

const router = express.Router()

router.post('/login', function (req, res) {
    console.log(req.body)
})


module.exports = router 