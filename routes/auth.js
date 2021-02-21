//user related routes
const express = require ('express')
const mysql = require ('mysql')
const router = express.Router()

const authController = require('../controllers/auth')

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.post('/admin', authController.admin)

module.exports = router