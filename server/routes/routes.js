const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()

router.get('/loadAllCourses', controller.loadAllcourses)

module.exports = router