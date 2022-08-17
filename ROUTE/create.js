const router = require("express").Router();
const createController = require("../CONTROLLER/newUser");

router.route("/create").post(createController.newUser);
router.route('/login').post (createController.login)

module.exports = router;
