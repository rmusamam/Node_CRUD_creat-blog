const router = require("express").Router();
const createController = require("../CONTROLLER/newUser");

router.route("/create").post(createController.newUser);


module.exports = router;
