const jwt = require("jsonwebtoken");
const user = require("../MODEL/newUserSchema");

exports.userExist = async (req, res, next) => {
//   const email = req.body.email;

  const emailExist = await user.findOne({ email: req.body.email });

  if (!emailExist) {
    res.status(400).send("email not exist");
  } else {
    if (emailExist.role == "user") {
      res.status(400).json({
        status: "Fail",
        Message: "you donot have access",
      });
    } else if (emailExist.password === req.body.password) {
      jwt.sign(
        { emailExist },
        "secretkey",
        { expiresIn: "2h" },
        (err, token) => {
          res.status(200).json({
            token,
          });
        }
      );
    } else {
      res.status(400).json({
        status: "Fail",
        Message: "Incorrect passsword",
      });
    }
  }
  next();
};
