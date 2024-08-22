const express = require('express')



//controller functions

const { signupUser, loginUser } = require('../controllers/userController')
const router = express.Router()

//login routes

router.post('/login', loginUser)

router.post('/signup', signupUser)


//signup routes

module.exports = router