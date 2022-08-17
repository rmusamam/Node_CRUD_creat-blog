const router= require('express').Router()
const blogController= require('../CONTROLLER/blog')
const { checkToken } = require('../MIDDLEWARE/checkToken')
const { verifyToken } = require('../MIDDLEWARE/verifyToken')
const {checkUser}= require('../MIDDLEWARE/checkUser')


router.route('/createPost').post(blogController.createBlog)
router.route('/showPost').get(blogController.showBlog)
router.route('/updatePost/:id').patch(blogController.updatePost)
router.route('/deletePost/:id').delete(blogController.deleteBlog)

module.exports=router