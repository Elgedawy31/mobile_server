const router = require('express').Router()
const { CreateUser , Login } = require('../controller/auth.controller')



router.post('/register' , CreateUser)
router.post('/login' , Login)


module.exports = router 