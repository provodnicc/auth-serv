const Router = require('express')
const router = new Router()
const controller = require('../controller/token.controller')

router.get('/token', controller.takeToken)

module.exports = router