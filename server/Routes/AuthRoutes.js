const { register, login } = require("../Controlles/AuthControllers");
// const { checkUser } = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();

// router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;