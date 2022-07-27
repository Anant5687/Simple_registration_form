const express = require('express')
const { forRegisterUser, gettingUserInfo } = require('../controllers/registratio.controller')

const registrationRouter = express.Router()

registrationRouter.post('/post', forRegisterUser)

registrationRouter.get('/get', gettingUserInfo)


module.exports = registrationRouter