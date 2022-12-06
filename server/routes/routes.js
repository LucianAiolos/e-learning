const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()

// console.log(controller.loadAllCourses)

router.get('/loadAllCourses', controller.loadAllCourses)

module.exports = router