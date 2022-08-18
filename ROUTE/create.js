const router = require("express").Router();
const createController = require("../CONTROLLER/newUser");
const {validateRegisteration,validateLogin,emailExist}=require ('../MIDDLEWARE/validateInput')

router.route("/create").post(validateRegisteration,emailExist,createController.newUser);

// there are 2 function for 'login' one is simple other is  'userLogin' copied from last project which contain some dependencies
router.route('/login').post (validateLogin,createController.login)

module.exports = router;
