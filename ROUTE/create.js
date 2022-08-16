const router=require('express').Router()
const create= require('../CONTROLLER/newUser')
router.route('/create').post(create.newUser)
