const express = require('express')
const routes = express.Router()
const userController = require('../Controller/usuarioController')


routes.get('/login', userController.login)


module.exports = routes