const express = require('express')
const addUser = require('../controller/userController')
const getUsers = require('../controller/getAllUser')
const getUser = require('../controller/getUser')
const editUser = require('../controller/editUser')
const deleteUser = require('../controller/deleteUser')

const router = express.Router()

router.post('/addUser',addUser)
router.get('/allUsers',getUsers)
router.get('/:id',getUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser)

module.exports = router