const router= require('express').Router()
const blogController= require('../CONTROLLER/blog')

router.route('/createPost').post(blogController.createBlog)
router.route('/showPost').get(blogController.showBlog)
router.route('/deletePost/:id').delete(blogController.deleteBlog)

module.exports=router